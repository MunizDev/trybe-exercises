#!/bin/bash

DIA=$(date +%F)

for FILE in $(ls *.png)
 do
mv $FILE $DIA-$FILE
 done