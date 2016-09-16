/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
         navigator.splashscreen.show();
       setTimeout(function() {
            navigator.splashscreen.hide();
}, 2000); 
    var push = PushNotification.init({
        android: {
            senderID: "445519548349",
            icon:"icon",
            iconColor:"#63113192",
            vibrate:true,
            forceShow:true,
            sound:true
        },
        browser: {
            pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        },
        ios: {
            alert: "true",
            badge: true,
            sound: 'false'
        },
        windows: {}
    });     
    push.on('registration', function(data) {
        
        //alert("reg");
    });
    push.on('notification', function(data) {
        //alert("not");
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
    });

    push.on('error', function(e) {
        //alert("error");
        // e.message
    });   

        $.getJSON( "http://digitalmediademos.com/promociones/api/promociones", function( data ) {
            $.each( data.promociones, function( i, item ) {
               $("#promos").append(' <div class="card col s12">    <div class="card-image waves-effect waves-block waves-light">      <img class="activator" src="http://digitalmediademos.com/promociones/media/thumbs/'+item.foto+'">    </div>    <div class="card-content">      <span class="card-title activator grey-text text-darken-4">'+item.titulo+'<i class="material-icons right">more_vert</i></span>         </div>    <div class="card-reveal">      <span class="card-title grey-text text-darken-4">'+item.titulo+'<i class="material-icons right">close</i></span>      <p>Vigencia: '+item.start_date+' al '+ item.end_date+'</p> <p>'+item.descripcion+'</p>   </div>  </div>');
            });
           
        });           
    }
};
