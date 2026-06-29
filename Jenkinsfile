pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Repository cloned successfully.'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t employee-api:v1 .'
            }
        }
    }
}