#!/bin/bash

DIR=$1

if [ -d $DIR ]; then
    ARQ=`ls -l | wc -l`
    echo "O $DIR tem $ARQ arquivos."

else
    echo "O argumento $DIR não é um diretório"
fi