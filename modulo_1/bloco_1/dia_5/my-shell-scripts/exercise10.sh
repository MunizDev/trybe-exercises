#!/bin/bash

DATA=$(date +%Y-%m-%d)
NTOTAL=$(expr `ls *png | wc -l` + 1 )
NATUAL="1"
 while [ $NATUAL -lt $NTOTAL ]
  do
NAME=$(ls *png | head -$NATUAL | tail -1)
NEWNAME="$DATA-$NAME"
mv $NAME $NEWNAME
NATUAL=$(expr $NATUAL + 1)
  done


#ADAPTEI ESSA ESTRUTURA DE UM ARTIGO PESQUISADO.