NODE_MODULES_TOP = ./node_modules
NODE_BINS = $(NODE_MODULES_TOP)/.bin

.PHONY: all clean comb lint types build page

all: clean comb lint types build page

clean:
	rm -rf ./lib
	mkdir ./lib

comb:
	$(NODE_BINS)/prettier --write "./**/*.{js,ts,tsx,json,graphql,md,*rc}"

lint:
	$(NODE_BINS)/tslint -t codeFrame --project ./tsconfig.json ./src/**/*.{ts,tsx}

types:
	$(NODE_BINS)/tsc --noEmit

build:
	$(NODE_BINS)/webpack --config ./webpack.config.js --env=$(env)

page:
	node ./pug.js ./src/index.pug ./index.html
