#!groovy

pipeline {

     agent any

    stages {


         
        stage('CheckOutGit'){

            steps{
                echo "Cloning the openkart project from github to container"
                checkout scm
                echo "successfully cloned the the openkart project"
                sh "ls -lrth"

            }
        }

    
          stage ('DockerSetup'){
            steps{
                script{
                    def dockerHome = tool 'myDocker'
                    echo ">>>>>>>>>>${dockerHome}"
                    env.PATH = "${dockerHome}/bin:${env.PATH}"
                }
            }
          }


        stage('Docker Check'){
                steps{

                    script{
                        echo "chekcing docker .........................."
                        sh "docker --version"
                        sh "whoaml"

                    }
         
                }
        
        }


        stage('Docker Build'){
            steps{
                script{
                    def customImage = docker.build("gugulothusathish/openkarts_jenkins:${env.BUILD_ID}")
                    echo "Pushing the image*************"

                    withCredntials([usrnamePassword(credentialsId: 'pythonfullstackdockerid', passwordVariable:'pythonfullstackdockerid',)])
                    {
                     sh "docker login -u ${env.pythonfullstackdockeridUser} -p ${env.pythonfullstackdockeridPassword}"
                     sh "docker push gugulothusathish/openkart_jenkins:${env.BUILD_ID}" 
                    }
                
                }
            
            
            }
        }







    }
}
