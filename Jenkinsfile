pipeline {
  agent any

  environment {
    REGISTRY   = "ghcr.io"
    OWNER      = "VladislavLavrov"
    IMAGE_NAME = "423901_devops_russkinanton"

    IMAGE_TAG    = "${env.BUILD_NUMBER}"
    FULL_IMAGE   = "${REGISTRY}/${OWNER}/${IMAGE_NAME}:${IMAGE_TAG}"
    LATEST_IMAGE = "${REGISTRY}/${OWNER}/${IMAGE_NAME}:latest"

    DEPLOY_HOST = "93.88.178.186"
    DEPLOY_PORT = "22"
    DEPLOY_USER = "student"
    DEPLOY_PATH = "/opt/DevOpsHW_Russkin"
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Build image') {
      steps {
        sh """
          docker build -t ${FULL_IMAGE} -t ${LATEST_IMAGE} .
        """
      }
    }

    stage('Login & Push (GHCR)') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'ghcr-creds', usernameVariable: 'GH_USER', passwordVariable: 'GH_TOKEN')]) {
          sh """
            echo "$GH_TOKEN" | docker login ${REGISTRY} -u "$GH_USER" --password-stdin
            docker push ${FULL_IMAGE}
            docker push ${LATEST_IMAGE}
          """
        }
      }
    }

    stage('Deploy to server') {
      steps {
        sshagent(credentials: ['prod-ssh-key']) {
          withCredentials([usernamePassword(credentialsId: 'ghcr-creds', usernameVariable: 'GH_USER', passwordVariable: 'GH_TOKEN')]) {
            sh """
              ssh -o StrictHostKeyChecking=no -p ${DEPLOY_PORT} ${DEPLOY_USER}@${DEPLOY_HOST} '
                set -e

                mkdir -p ${DEPLOY_PATH}
                cd ${DEPLOY_PATH}

                echo "${GH_TOKEN}" | docker login ${REGISTRY} -u "${GH_USER}" --password-stdin

                # Обновляем IMAGE в .env на конкретный tag сборки
                if [ -f .env ]; then
                  sed -i "s|^IMAGE=.*|IMAGE=${FULL_IMAGE}|" .env
                else
                  echo "IMAGE=${FULL_IMAGE}" > .env
                fi

                docker compose pull
                docker compose up -d
                docker image prune -f
              '
            """
          }
        }
      }
    }
  }

  post {
    always {
      sh 'docker logout ${REGISTRY} || true'
    }
  }
}
