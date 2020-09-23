---
title: "Buiding Chat App with React Native and Socket.io"
excerpt: ""
slug: buiding-chat-app-with-react-native-and-socketio-cjzi03e3e005bdes19yy89z7d
tags:
  - react-native
  - social network
  - chat app
author: "krissanawat"
date: "2020-01-07T09:55:39.689Z"
draft: false
template: "post"
featuredImage: ""
---

In this post, we are going to learn how to build a [React Native Chat App](https://www.instamobile.io/app-templates/react-native-chat-app-template/) with React Native and Socket.io. Socket.io is a widely-used JavaScript library mostly used for realtime web applications. It enables real-time, two-way and event-based communication between the client (browser) and the server. It is built from Node.js and JavaScript client library. Its most prominent features are reliability, automatic reconnection, multigroup room support and detecting breakage in connection.

Thus, these are the features we get from socket.io and which we are going to integrate into our React Native app in order to create a chat application.

_So, let’s get started, folks!!!_

### Nodejs backend

First of all, we need a backend server which handles all the incoming messages and requests from the clients.

Here, we need to include express and socket.io to index.js file in our node project. We are going to use the es5 method to import the required express and socket.io libraries. But you can use es6 coding format to import as well. We are going to initialize express method to a constant variable app and then create the http server with app variable. After that, we are going to listen to the server using socket.io library. The port server is going to listen to is set to 3000.

```javascript
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;
```

Secondly, we need to start socket.io server with on method. Then, we need to emit function in order to establish two-way communication as shown in the code snippet below:

```javascript
io.on("connection", (socket) => {
  console.log("a user connected :D");
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});
```

lastly, we are going to start the server on port 3000 so that server can listen to any incoming request at that port.

```
server.listen(port, () => console.log("server running on port:" + port));
```

You can check the result of server-side code and demo in [Codesandbox](https://codesandbox.io/s/trusting-allen-g0ztf). This completes our server setup.

### React Native Section

In this step, we are going to assume that we have already set up the React Native project and it is running. Now, we move on the building of application and integrating server-side to our client-side chat application.

Here, first, we need to import socket.io client package i.e importing io module from socket.io-client package as shown in the code snippet below:

```
import io from "socket.io-client";
```

Next, we need to create two states to handle change in written message and the array that holds the messages. The two states here are chatMessage which handles the client's input and chatMessages array which handles the storing of submitted or received messages. The code for this is given in the code snippet below:

```javascript
constructor(props) {
   super(props);
   this.state = {
      chatMessage: "",
      chatMessages: []
   };
}
```

Now, we initialize the connection to the server.

Here, by using on method of io module, we are going to change the _array_ state by concating the new messages that are sent or received, as shown in the code snippet below:

```javascript
componentDidMount() {
   this.socket = io("http://127.0.0.1:3000");
    this.socket.on("chat message", msg => {
          this.setState({ chatMessages: [...this.state.chatMessages, msg]
     });
  });
}
```

Next, we need to create a simple form and display messages with map function. We are going to simple TextInput element for clients to enter the message and trigger the submitChatMessage function when onSubmitEditing event occurs as shown in the code snippet below:

```javascript
render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <Text style={{borderWidth: 2, top: 500}}>{chatMessage}</Text>
    ));

    return (
      <View style={styles.container}>
        {chatMessages}
        <TextInput
          style={{height: 40, borderWidth: 2, top: 600}}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({chatMessage});
          }}
        />
      </View>
  ` );
  }
```

The submitChatMessage function is created to send the message to the server using emit method as shown in the code snippet below:

```javascript
submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
  }
```

Lastly, we are going to add some styles to our chat container using the Stylesheet component as shown in the code snippet below:

```javascript
const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});
```

Now, we run our project on a device emulator or testing. As we can see, it works as expected:

![](https://cdn-images-1.medium.com/max/810/1*kZkmBqwGDVZ4L7ueEXSkkw.gif)

Hence, this marks the successful completion of our simple chat application using React Native and Socket.io package.

### conclusion

In this post, we learned how to create and set up a simple socket.io server using Node and express. Then, we also learned how to integrate the client React Native chat application with the server-side. We were able to establish two-way communication successfully. Finally, we were able to run and test our chat application in the device emulator successfully.

### Disclosure

This post includes affiliate links; I may receive compensation if you purchase products or services from the different links provided in this article.
