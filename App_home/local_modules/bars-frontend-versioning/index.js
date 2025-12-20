#!/usr/bin/env node

const convert = require('xml-js');
const fs = require('fs');
const { Command } = require('commander');
const { exec } = require('child_process');


const program = new Command();

program
    .version('1.0.0')
    .description('Утилита для синхронизации метаданных проекта из versions.xml в package.json.');

program
    .command('sync <filePath> [packageName]')
    .alias('s')
    .option('--yarn', 'Выполнять команды через yarn, вместо npm')
    .description('Записать данные из versions.xml в package.json.')
    .action((filePath, packageName, options) => {
        const file = fs.readFileSync(filePath, 'utf8');
        if (file) {
            const parsedXml = convert.xml2js(file);
            const versionsSection = parsedXml
                ?.elements
                ?.find(el => el.name == "versions");
            if (!versionsSection) {
                console.error("Invalid structure of XML file: top section 'versions' not found");
                return;
            }
            const packageToSearch = packageName ? packageName 
            : require('../../package.json').name; //Забавный костыль, обычный require('./package.json') вернёт инфо об этом модуле, а нам надо о материнском проекте
            const packageSection = versionsSection
                ?.elements
                ?.find(el => el.name == packageToSearch);
            if (!packageSection) {
                console.error("Section '" + packageToSearch + "' in parent 'versions' not found");
                return;               
            }

            const version = packageSection?.attributes?.version;
            if (!version) {
                console.warn("'version' attribute not found for section '" + packageToSearch + "', version not updated!");               
            }
            else {
                if (options.yarn) {
                    exec('yarn version --new-version ' + version, (err) => {
                        if (err) {
                          console.error(err)
                          return;
                        }
                    });
                }
                else {
                    exec('npm version ' + version + ' --no-git-tag-version', (err) => {
                        if (err) {
                          console.error(err)
                          return;
                        }
                    });
                }
                console.info("version set to " + version);      
            }

            const description = packageSection?.attributes?.description;
            if (!description) {
                console.info("'description' attribute not found for section '" + packageName + "', skip");               
            }
            else {
                if (options.yarn) {
                    console.warn("description field not support in yarn mode, skip");      
                }
                else {
                    exec('npm pkg set description="' + description + '"', (err) => {
                        if (err) {
                          console.error(err)
                          return;
                        }
                    });
                }
                console.info("description set to " + description);      
            }

            console.info("Done! Have a good day ;)");  
        }
        else {
            console.error("XML file: " + filePath + " not found");
        }
    });

program.parse(process.argv);
