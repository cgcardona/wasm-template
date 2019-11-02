# Wasm Template

Template for writing web apps in Rust and deploying via wasm.

## Usage

Clone the repo

```
git clone https://github.com/cgcardona/wasm-template.git
```

Change directories

```
cd wasm-template
```

Build the app and deps

```
cargo build
```

Build the wasm

```
wasm-pack build
[INFO]: 🎯  Checking for the Wasm target...
[INFO]: 🌀  Compiling to Wasm...
   Compiling proc-macro2 v1.0.6
   ...
```

Change directories and install the web deps

```
cd www
npm install
```

Start the app

```
npm run start
```

Now open the browser to [http://localhost:8080](http://localhost:8080)

## Things to notice

[Public functions](./src/lib.rs#L16) which have the `#[wasm_bindgen]` attribute in `src/lib.rs` are available for import in your [./www/index.js#L3](https://github.com/cgcardona/wasm-template/blob/master/www/index.js#L3)

## Steps

To do all these steps in order:

```
cargo generate --git https://github.com/rustwasm/wasm-pack-template

🤷  Project Name: wasm-template
🔧   Creating project called `wasm-template`...
✨   Done! New project created /Users/carloscardona/Sites/dev/rust-playground/wasm-template

cd wasm-template

wasm-pack build
[INFO]: 🎯  Checking for the Wasm target...
[INFO]: 🌀  Compiling to Wasm...
    Updating crates.io index
   Compiling proc-macro2 v1.0.6
   ...


npm init wasm-app www

cd www
npm install
npm run start
```

Now open the browser to [http://localhost:8080](http://localhost:8080)
