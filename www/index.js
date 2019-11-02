import { Foo } from "wasm-template"

const foo = Foo.new()

const el = document.getElementById("wasm-template")
el.innerHTML = foo.bar
