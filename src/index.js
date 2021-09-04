module.exports = function ({types: t}) {
    console.log('Inject plugins!');
    return {
        name: "artty-lab",
        visitor: {
            // Identifier(path, state) { }, ASTNodeTypeHere(path, state) { },
            Program(path) {
                // console.log(path.get('body.0'));
                // console.log(path.get('body.0.params.0').name)
            },
            BinaryExpression(path) {
                // path.node.left = t.identifier('_.' + path.node.left.name);
            },
            ReturnStatement(path) {
                // path.replaceWithMultiple([     t.expressionStatement(t.stringLiteral("Is this
                // the real life?")),     t.expressionStatement(t.stringLiteral("Is this just
                // fantasy?")),     t.expressionStatement(t.stringLiteral("(Enjoy singing the
                // rest of the song in your head)")), ]);
            },
            FunctionDeclaration(path) {
                // path.remove();
                path.scope.rename("n","state");
            },
            CallExpression(path){
                if(path.node.callee.name !== 'h') return;
                // path.insertBefore(t.expressionStatement(t.stringLiteral("/* VDOM */")));
                let tag = path.node.arguments[0].value;
                let attr = path.node.arguments[1].properties[0];
                // path.node.arguments[1].replaceWithMultiple([t.expressionStatement(t.stringLiteral("Hello"))])
                // path.replaceWithMultiple([t.expressionStatement(t.stringLiteral("Hello"))])
                // path.remove();
                console.log(path.node.name)
            },
            Identifier(path) {
                path.node.name = "h";
            }
        }
    };
};