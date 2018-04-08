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
    res.send('Hello World!\t~~LineBot正常運作中~~');
});

app.post('/linewebhook', linebotParser);

bot.on('message', function (event) {
	if (event.message.type == "text")
		if ( (event.message.text == "嗨" ) || (event.message.text == "你好") || (event.message.text == "Hi") || (event.message.text == "hi") || (event.message.text == "Hi!") || (event.message.text == "HI") )
			event.reply("哈囉!").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if ( (event.message.text == "TNFSH") || (event.message.text == "tnfsh") || (event.message.text == "Tnfsh") || (event.message.text == "臺南一中") || (event.message.text == "台南一中") || (event.message.text == "南一中") )
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
		else if ( (event.message.text == "早安") || (event.message.text == "早") || (event.message.text == "早啊") || (event.message.text == "早安啊") )
			event.reply("早安啊!").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if ( (event.message.text == "晚安") || (event.message.text == "晚安啊") || (event.message.text == "Good night") )
			event.reply("晚安!\n祝你有個好夢~").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else
			/*event.reply(event.message.type).then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});*/
			event.reply("喔\n"+event.message.text).then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
	else if (event.message.type == "sticker")
		if ( (event.message.packageId == "1") ||(event.message.packageId == "2") || (event.message.packageId == "3") ||(event.message.packageId == "4"))
			event.reply({
				type: 'sticker',
				packageId: event.message.packageId,
				stickerId: event.message.stickerId
			}).then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else
			event.reply({
				type: 'sticker',
				packageId: 1,
				stickerId: 1
			}).then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});			
	else if (event.message.type == "audio")
		event.reply("聽不懂ㄏㄏ").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	else if (event.message.type == "image")
		event.reply("傳圖片功能開發中~~\n求教學!").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	else if (event.message.type == "file")
		event.reply("我才不打開來路不明的檔案咧!\n我中毒了你要負責嗎?\n要讓我壞掉沒這麼容易的!!!").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	else if (event.message.type == "location")
		event.reply(event.message.address+"\n這地方我大概沒去過吧!!\n可以帶我去嗎?").then(function (data) {
			console.log('Success', data);
		}).catch(function (error) {
			console.log('Error', error);
		});
	else
		event.reply("抱歉無法辨識您的message type!\n請聯絡管理員...\nSorry~\n錯誤訊息:TYPE_ERR("+event.message.type+")").then(function (data) {
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