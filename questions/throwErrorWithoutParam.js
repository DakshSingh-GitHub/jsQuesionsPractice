
function checkShow() { return new Error("Param Required") }
function show(name=checkShow()) {
    console.log(name);
}

// noinspection JSCheckFunctionSignatures
show("Daksh Singh");
