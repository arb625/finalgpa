import React from 'react';

module.exports = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        </head>
        <body>
          <div id="root" />
          <script src="public/js/build/build.js" />
        </body>
      </html>
    );
  },
});

// export default class HTMLComponent extends React.Component {

//   render () {
//     return (
//       <html>
//         <head>
//           <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
//         </head>
//         <body>
//           <div id="root"></div>
//           <script type="text/javascript" src="public/js/build/build.js" charset="utf-8"></script>
//         </body>
//       </html>
//     );
//   }

// }
