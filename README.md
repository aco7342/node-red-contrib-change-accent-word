node-red-contrib-change-accent-word
===================================

A <a href="http://nodered.org" target="_new">Node-RED</a> 
node that convert accent words inside msg.payload to another word without accent

Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install node-red-contrib-change-accent-word
    
    * dependency https://github.com/aco7342/changewordswithaccents


Usage
-----
<pre><code>
if Input msg.payload is
 "Contrata\u001a\u001ao de im\u001aveis para " + 
 "instala\u001a\u001ao da Ag\u001ancia do IBGE " + 
 "no munic\u001apio de Concei\u001a\u001ao do " +
 "Araguaia/PA.";

Output msg.payload must be 

 "contratacao de imoveis para instalacao da agencia do ibge no " + 
 "municipio de conceicao do araguaia/pa.

Special Remarks: msg.action is ...
  Equal "C"ombine (Default) 
         Create Object 
              a)plus a msg.topic param or 
              b)remove all item
  Equal "R"eplace
         Create Object and replace word with msg.topic content
  Equal "D"elete   
         Create Object and remove msg.topic item word

  msg.topic:
       1)   a. {list:[{chg:"municipio",fnd:"municpio"} ... ]}
            b. {emptyList: true}
       2) {list : [ {chg: "municipio",fnd: "municpio"} ... ]} 
       3) 'locao'  or 'locao imvel ...'

       
  To use with this 
  "http://compras.dados.gov.br/contratos/v1/contratos.json?offset=0"
  
  see https://github.com/aco7342/changewordswithaccents file: lib/lang.json
  
  Hackathon - Fiesp2017 / ADPF
  Fiscal Cidadao - Projeto de Combate a Corrupçao
  BlueMix/NodeRed & Watson Discovery e outros
  
</code></pre>
