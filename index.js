const linebot = require('linebot');
const express = require('express');

const bot = linebot({
	channelId: process.env.CHANNEL_ID,
	channelSecret: process.env.CHANNEL_SECRET,
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const app = express();

const linebotParser = bot.parser();

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.post('/linewebhook', linebotParser);

bot.on('message', function (event) {
	if ( (event.message.text == "嗨" ) || (event.message.text == "你好") || (event.message.text == "Hi") || (event.message.text == "hi") || (event.message.text == "Hi!") || (event.message.text == "HI") )
		event.reply("哈囉!").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	else if (event.message.text == "TNFSH")
		event.reply("好學校!").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	else if ( (event.message.text == "彩蛋") || (event.message.text == "gnsJhenJie") || (event.message.text == "gnsjhenjie") || (event.message.text == "Gnsjhenjie") || (event.message.text == "GnsJhenJie"))
		event.reply("Ya!!\n你找到彩蛋啦!!!\n然後......\n然後就沒有然後了").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	else if ( (event.message.text == "幹") || (event.message.text == "幹你娘") )
		event.reply("趕羚羊!\n操你媽derB").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	else if ( (event.message.text == "教我C++") || (event.message.text == "教我c++") || (event.message.text == "C++大神") || (event.message.text == "c++大神") )
		event.reply("我看你只是想抄作業吧!\n請到: https://www.github.com/gnsJhenJie/mycpp \n不要太感謝我喔!\n段考自己看著辦囉~").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	else if ( (event.message.text == "root") || (event.message.text == "admin") || (event.message.text == "Root") || (event.message.text == "Admin") || (event.message.text == "Administrator") || (event.message.text == "administrator"))
		event.reply("你以為這樣幹嘛?\nCTF打太多嗎?").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	else if ( (event.message.text == "嘿!Siri") || (event.message.text == "Siri") || (event.message.text == "嘿!siri") || (event.message.test == "siri") || (event.message.text == "嘿!Siri!") || (event.message.test == "嘿!!siri!") )
		event.reply("你當我TMD Siri?").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	else
		event.reply("喔\n"+event.message.text).then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
});
bot.on('join', function (event) {
	event.reply("Hello! 歡迎新朋友!").then(function (data) {
		console.log('Success', data);
	}).catch(function (error) {
		console.log('Error', error);
	});
});
app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});