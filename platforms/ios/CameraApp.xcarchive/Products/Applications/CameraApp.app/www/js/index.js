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
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log(navigator.camera);
        this.receivedEvent('deviceready');
        
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var takePhoto = document.getElementById('takePhoto');
        var photoGallery = document.getElementById('photoGallery');

        takePhoto.addEventListener('click',function(){
/****************************************************** 
    Code Source http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html#cameragetpicture-errata
***************************************************** */
            navigator.camera.getPicture(onSuccess, onFail,
                {
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
                });  
        })

        photoGallery.addEventListener('click',function(){
            navigator.camera.getPicture(onSuccess, onFail,
                {
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
                });  
        });

        function onSuccess(imageURI) {
            var image = document.getElementById('myImage');
            image.classList.add('image')
            image.src = imageURI;
        }
        
        function onFail(message) {
            //alert('Failed because: ' + message);
        }
    }
};

app.initialize();