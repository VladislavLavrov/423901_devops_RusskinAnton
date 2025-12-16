pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'DevOpsHW', url: 'https://github.com/VladislavLavrov/423901_devops_RusskinAnton.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('.') {
                    sh 'docker build -t DevOpsHW_Russkin .'
                }
            }
        }

        stage('Compose Up') {
            steps {
                dir('steel_predict_project') {
                    sh 'docker compose up -d --build'
                }
            }
        }
    }

    post {
        failure {
            echo "Build failed"
        }
    }
}