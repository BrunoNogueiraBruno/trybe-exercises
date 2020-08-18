#!/bin/bash

CAMINHO=/home/bruno/trybe-exercises/my-shell-scripts
if [ -e $CAMINHO ]; then
    echo "O caminho $CAMINHO está habilitado"
fi

if [ -w $CAMINHO ]; then
    echo "Você tem permissão para editar $CAMINHO"
else
    echo "Você NÃO foi autorizado a editar $CAMINHO"
fi