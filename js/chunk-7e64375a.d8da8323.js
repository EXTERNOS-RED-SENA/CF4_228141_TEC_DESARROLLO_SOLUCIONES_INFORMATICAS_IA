(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e64375a"],{"0337":function(e,i,t){"use strict";t.r(i);var r=function(){var e=this,i=e._self._c;return i("div",{staticClass:"curso-main-container glosario"},[i("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),i("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},e._l(e.orderedData,(function(t){return i("div",{key:"letra-"+t.letra,staticClass:"glosario__letra-item mb-2"},[i("div",{staticClass:"glosario__letra-item__letra me-4"},[i("div",{staticClass:"glosario__letra-item__letra__icono"},[i("span",[e._v(e._s(t.letra))])])]),i("div",{staticClass:"glosario__letra-item__texto"},e._l(t.terminos,(function(t){return i("p",{key:t.termino,staticClass:"mb-3"},[e._m(0,!0),i("strong",{domProps:{innerHTML:e._s(t.terminoHtml||t.termino)}}),i("strong",[e._v(": ")]),i("span",{domProps:{innerHTML:e._s(t.significado)}})])})),0)])})),0)],1)},o=[function(){var e=this,i=e._self._c;return i("strong",[i("i",{staticClass:"lista-ul__vineta"})])}],n=(t("14d9"),t("13d5"),t("0643"),t("fffc"),t("4e3e"),t("a573"),t("9d4a"),{computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const e=this.menuData.find(e=>"introduccion"===e.nombreRuta),i=this.menuData.find(e=>"tema1"===e.nombreRuta);return e||i}},methods:{quitarAcentos(e){const i=e.replace(/<\/?[^>]+(>|$)/g,""),t={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return i.split("").map(e=>t[e]||e).join("").toString()}}}),a={name:"Glosario",mixins:[n],data(){return{glosarioData:[{termino:"API (<em>Application Programming Interface</em>)",significado:"Conjunto de reglas y protocolos que permiten la comunicación entre diferentes componentes de <em>software</em>."},{termino:"Branch (Rama)",significado:"En control de versiones, una línea independiente de desarrollo que permite trabajar en características o correcciones sin afectar el código principal."},{termino:"<em>Commit</em>",significado:"Instantánea del código en un momento específico que registra cambios en el repositorio de control de versiones."},{termino:"<em>Debugging</em>",significado:"Proceso de identificación y corrección de errores en el código fuente."},{termino:"<em>Deploy</em> (Despliegue)",significado:"Proceso de poner una aplicación en producción o hacerla disponible para su uso."},{termino:"Git",significado:"Sistema de control de versiones distribuido diseñado para manejar proyectos de cualquier tamaño con velocidad y eficiencia."},{termino:"IDE (<em>Integrated Development Environment</em>)",significado:"Entorno de desarrollo integrado que proporciona herramientas comprensivas para la programación."},{termino:"<em>Merge</em> (Fusión)",significado:"Proceso de combinar cambios de diferentes ramas en el control de versiones."},{termino:"Microservicios",significado:"Arquitectura que estructura una aplicación como un conjunto de servicios pequeños e independientes."},{termino:"<em>Pipeline</em>",significado:"Secuencia automatizada de procesos para llevar el código desde el desarrollo hasta la producción."},{termino:"Pull Request",significado:"Solicitud para integrar cambios de una rama a otra, típicamente utilizada para revisión de código."},{termino:"REST",significado:"Estilo de arquitectura de <em>software</em> para sistemas distribuidos, especialmente usado en APIs web."},{termino:"Staging Area",significado:"En Git, área intermedia donde se preparan los cambios antes de confirmarlos."},{termino:"<em>Testing</em>",significado:"Proceso de evaluar un sistema o componente para verificar que cumple con los requisitos especificados."},{termino:"Versionamiento",significado:"Sistema para registrar cambios en archivos de código fuente a lo largo del tiempo."}]}},computed:{orderedData(){const e=[...this.glosarioData];e.forEach(e=>{e.significado=e.significado.charAt(0).toLowerCase()+e.significado.slice(1)});const i=[...e].reduce((e,i)=>{const t=this.quitarAcentos(i.termino.toLowerCase())[0];return e[t]?e[t].terminos.push(i):e[t]={letra:t,terminos:[i]},e},{}),t=Object.keys(i).sort(),r=[];return t.forEach(e=>{const t=i[e];let o=t.terminos;if(o.length>1){const e=[],i=t.terminos.map(e=>e.termino).sort((e,i)=>{const t=this.quitarAcentos(e).toLowerCase(),r=this.quitarAcentos(i).toLowerCase();return t<r?-1:r<t?1:0});i.forEach(i=>{e.push(o.find(e=>e.termino===i))}),o=e}r.push({letra:t.letra.toUpperCase(),terminos:o})}),r}}},s=a,c=(t("169e"),t("2877")),u=Object(c["a"])(s,r,o,!1,null,null,null);i["default"]=u.exports},"13d5":function(e,i,t){"use strict";var r=t("23e7"),o=t("d58f").left,n=t("a640"),a=t("1212"),s=t("9adc"),c=!s&&a>79&&a<83,u=c||!n("reduce");r({target:"Array",proto:!0,forced:u},{reduce:function(e){var i=arguments.length;return o(this,e,i,i>1?arguments[1]:void 0)}})},"169e":function(e,i,t){"use strict";t("8f75")},"4e3e":function(e,i,t){"use strict";t("7d54")},"7d54":function(e,i,t){"use strict";var r=t("23e7"),o=t("2266"),n=t("59ed"),a=t("825a"),s=t("46c4");r({target:"Iterator",proto:!0,real:!0},{forEach:function(e){a(this),n(e);var i=s(this),t=0;o(i,(function(i){e(i,t++)}),{IS_RECORD:!0})}})},8558:function(e,i,t){"use strict";var r=t("cfe9"),o=t("b5db"),n=t("c6b6"),a=function(e){return o.slice(0,e.length)===e};e.exports=function(){return a("Bun/")?"BUN":a("Cloudflare-Workers")?"CLOUDFLARE":a("Deno/")?"DENO":a("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===n(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},"8f75":function(e,i,t){},9485:function(e,i,t){"use strict";var r=t("23e7"),o=t("2266"),n=t("59ed"),a=t("825a"),s=t("46c4"),c=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(e){a(this),n(e);var i=s(this),t=arguments.length<2,r=t?void 0:arguments[1],u=0;if(o(i,(function(i){t?(t=!1,r=i):r=e(r,i,u),u++}),{IS_RECORD:!0}),t)throw new c("Reduce of empty iterator with no initial value");return r}})},"9adc":function(e,i,t){"use strict";var r=t("8558");e.exports="NODE"===r},"9d4a":function(e,i,t){"use strict";t("9485")},a640:function(e,i,t){"use strict";var r=t("d039");e.exports=function(e,i){var t=[][e];return!!t&&r((function(){t.call(null,i||function(){return 1},1)}))}},d58f:function(e,i,t){"use strict";var r=t("59ed"),o=t("7b0b"),n=t("44ad"),a=t("07fa"),s=TypeError,c="Reduce of empty array with no initial value",u=function(e){return function(i,t,u,d){var l=o(i),m=n(l),f=a(l);if(r(t),0===f&&u<2)throw new s(c);var p=e?f-1:0,g=e?-1:1;if(u<2)while(1){if(p in m){d=m[p],p+=g;break}if(p+=g,e?p<0:f<=p)throw new s(c)}for(;e?p>=0:f>p;p+=g)p in m&&(d=t(d,m[p],p,l));return d}};e.exports={left:u(!1),right:u(!0)}}}]);
//# sourceMappingURL=chunk-7e64375a.d8da8323.js.map