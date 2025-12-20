pipeline {
  agent any

  environment {
    IMAGE = "devopshw-russkin:latest"   // только lowercase!
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'DevOpsHW', url: 'https://github.com/VladislavLavrov/423901_devops_RusskinAnton.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh "docker build -t ${IMAGE} ."
      }
    }

    stage('Run container') {
      steps {
        sh """
          docker rm -f devopshw_russkin || true
          docker run -d --name devopshw_russkin -p 5552:80 ${IMAGE}
        """
      }
    }
  }

  post {
    always {
      sh 'docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}" || true'
    }
    failure {
      echo "Build failed"
    }
  }
}
