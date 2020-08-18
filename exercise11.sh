#!/bin/bash

#A EXTENSÃO E O DIRETÓRIO DOS ARQUIVOS DEVEM SER ADICIONADOS COMO ARGUMENTO.
EXTENSION=$1
DIR=$2
DIA=$(date +%F)
sleep 1; echo ".";sleep 1; echo ".";sleep 1; echo ".";
echo "As seguintes modificações serão realizadas..."
for NOME in $(ls $2 | ls *.$1)
 do
echo "antes: $NOME depois: $DIA-$NOME"
 done

sleep 1; echo ".";sleep 1; echo ".";sleep 1; echo ".";

for FILE in $(ls $2 | ls *.$1)
 do
mv $FILE $DIA-$FILE
 done