module.exports = function(RED) {
    "use strict";
    var Filter = require('changewordswithaccents');
    
    function ChangeAccentWordNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var Cmd = ''            
            node.log( "* A *" ); 
            if (msg.topic !== ""){
                node.log( "* B *" ); 
                if (!msg.action){                
                    Cmd = 'C';
                } else {
                    Cmd = msg.action;
                    Cmd = Cmd.toUpperCase();
                }
                node.log( "Cmd:" + Cmd  + "msg.topic:" +  msg.topic  );
                if (Cmd == 'C') {
                    node.log( "* B * (C)" ); 
                    var filter = new Filter( msg.topic );
                } else {
                   var filter = new Filter(); 
                   if (Cmd == 'R') {
                       node.log( "* B * (R)" ); 
                       filter.removeAllWords();
                       var vet = msg.topic.list;
                       for (var x = 0 ; x < vet.length ; x++){
                           node.log( "Item:" + JSON.stringify(vet[x])    );
                           filter.addWords( vet[x] );
                       }
                   } else {
                      if (Cmd == 'D') {
                        node.log( "* B * (R)" ); 
                        filter.removeWords(msg.topic);
                      }                      
                   }
                }
                
            } else {
                node.log( "* C *" ); 
                var filter = new Filter(); 
                if (msg.action){                
                    Cmd = msg.action;
                    Cmd = Cmd.toUpperCase();
                    node.log( "Cmd:" + Cmd  );
                    if (Cmd == 'L') {
                        
                        var filter = new Filter();
                        var _ret = filter.getWords();
                        msg.payload = _ret;
                        node.log( "Cmd:" + Cmd + " *"  + JSON.stringify(_ret));
                    } else {
                        node.log( "Cmd:" + Cmd + " ***"  );
                    }                        
                } else {
                    node.log( "Just a conversion !" );
                }
            }
           
            if (Cmd !== 'L') {
               node.log( "Just a conversion" );
               msg.payload = filter.clean( msg.payload ) ;
            }

            node.send(msg);
        });
    }
    RED.nodes.registerType("chg-word-accent",ChangeAccentWordNode);

}