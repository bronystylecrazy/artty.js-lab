import { BabelFileResult, NodePath, transformSync } from '@babel/core';
import chalk from 'chalk';
import * as t from '@babel/types';
export default function Artty(sourcecode: string){
    let code = sourcecode;
    let output : BabelFileResult | null = transformSync(code, {
        plugins: [
            function ArttyTransform() {
              return {
                visitor: {
                    CallExpression(path: NodePath){
                        if(path.node.callee.name !== 'h') return;
                        try{
                            var hName = path.node.callee.name;
                            var arg = path.node.arguments;
                            /// $if
                            (function(){
                            var foundKey = path.node.arguments[1].properties.find(e => e.key.name === '$if')
                            if(!!foundKey){
                                if(foundKey.key.name === '$if'){
                                    path.traverse({
                                        ObjectExpression(path){
                                            path.traverse({
                                                ObjectProperty(path){
                                                    if(path.node.key.name === '$if')
                                                        path.remove();
                                                    console.log("-----------> ", );
                                                }
                                            })
                                        }
                                    })
                                    path.replaceWith(
                                        t.conditionalExpression(
                                            t.parenthesizedExpression(foundKey.value) /*p foundKey.value*/,
                                            path.node,
                                            t.callExpression(t.identifier('h'),[])
                                        )
                                    );
                                }
                                console.log('found ---->', !!foundKey ? true : false)
                                path.skip();
                            }
                            })();

                            /// $for
                            (function(){
                                var foundKey = path.node.arguments[1].properties.find(e => e.key.name === '$for')
                                if(!!foundKey){
                                    if(foundKey.key.name === '$for'){
                                        path.traverse({
                                            ObjectExpression(path){
                                                path.traverse({
                                                    ObjectProperty(path){
                                                        if(path.node.key.name === '$for')
                                                            path.remove();
                                                        console.log("-----------> ", );
                                                    }
                                                })
                                            }
                                        })
                                        
                                        if(t.isIdentifier(foundKey?.value?.left)){
                                            path.replaceWith(
                                                t.callExpression(t.identifier('_.L'),[
                                                    t.parenthesizedExpression(foundKey.value.right),
                                                    t.arrowFunctionExpression([
                                                        foundKey.value.left
                                                    ], path.node)
                                                ])
                                            );
                                        }else if(t.isSequenceExpression(foundKey?.value?.left)){
                                            console.log("Expression for");
                                            console.log(foundKey.value.left)
                                            console.log(foundKey.value.left.expressions)
                                            path.replaceWith(
                                                t.callExpression(t.identifier('_.L'),[
                                                    t.parenthesizedExpression(foundKey.value.right),
                                                    t.arrowFunctionExpression(foundKey.value.left.expressions, path.node)
                                                ])
                                            );
                                        }
                                        console.log(foundKey.value.right);
                                    }
                                    console.log('found ---->', !!foundKey ? true : false)
                                    path.skip();
                                }
                                })();

                        }catch(e){ console.log(' \n'+chalk.red(e.message))}
                    },
                    // ObjectExpression(path: NodePath) {
                    //     if(path.parentPath?.isCallExpression()){
                    //         console.log(chalk.blue(path.parentPath.node.arguments))
                    //         console.log();
                    //         console.log("This is expression");
                    //     }
                    // },
                },
              };
            },
        ],
    });
    console.log(output?.code)
    return output;
}