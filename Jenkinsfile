pipeline {
    agent any

    environment {
        IMAGE_NAME = "snehbhav/employee-api:v2"
    }

    stages {

        stage('Build Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop employee-api || true
                docker rm employee-api || true

                docker pull snehbhav/employee-api:v2

                docker run -d \
                  --name employee-api \
                  -p 3000:3000 \
                  snehbhav/employee-api:v2
                '''
            }
        }
    }
}