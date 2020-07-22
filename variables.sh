#!/usr/bin/env bash

cp $1/variables.js $1/variables-final.js

sed -i -e "s@__BACKGROUND__@$TIMER_BACKGROUND@g" $1/variables-final.js
sed -i -e "s@__END__@$TIMER_TARGET@g" $1/variables-final.js
sed -i -e "s@__TITLE__@$TIMER_TITLE@g" $1/variables-final.js
