#!/bin/bash

FILES=$@

for FILE in $FILES; do
if [ -f $FILE ]; then
    echo "$FILE é um arquivo comum"; ls -l

elif [ -d $FILE ]; then
    echo "$FILE é um diretório"; ls -l

else
    echo "$FILE não é nem arquivo nem diretório"; ls -l
fi

done