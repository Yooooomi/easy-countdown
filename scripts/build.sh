#!/usr/bin/env bash

if [[ "$ENVIRONMENT" != "DEV" ]]
then
    yarn build
fi
