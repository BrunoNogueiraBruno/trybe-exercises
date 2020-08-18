#!/bin/bash

echo "Insira o caminho"; read CAMINHO

if [ -f $CAMINHO ]; then
    echo "$CAMINHO é um arquivo comum"; ls -l

elif [ -d $CAMINHO ]; then
    echo "$CAMINHO é um diretório"; ls -l

else
    echo "$CAMINHO não é nem arquivo nem diretório"; ls -l
fi