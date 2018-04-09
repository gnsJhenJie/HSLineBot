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
	var msg = event.message.text.toLowerCase();
	if ( event.message.type == "text" )
		if ( (msg.indexOf('嗨') != -1 ) || (msg.indexOf('你好') != -1) || (msg.indexOf('hi') != -1) )
			event.reply("哈囉!").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if (msg == "test")
			event.reply("TEST Success!").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if ( (msg.indexOf('tnfsh') != -1 ) || (msg.indexOf('南一中') != -1 ) )
			event.reply({
				type: 'location',
				title: '~臺南一中是好學校~',
				address: '701台南市東區民族路一段1號',
				latitude: 22.9941884,
				longitude: 120.21599119999996
				}).then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if ( (msg == "彩蛋") || (msg == "gnsjhenjie") )
			event.reply("Ya!!\n你找到彩蛋啦!!!\n然後......\n然後就沒有然後了").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if ( (msg == "幹") || (msg.indexOf('幹你娘') != -1) )
			event.reply("趕羚羊!\n操你媽derB").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if (msg.indexOf('c++') == "教我C++")
			event.reply("我看你只是想抄作業吧!\n請到: https://www.github.com/gnsJhenJie/mycpp \n不要太感謝我喔!\n段考自己看著辦囉~").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if ( (msg == "root") || (msg == "admin") || (msg == "root") || (msg == "administrator") )
			event.reply("你以為這樣幹嘛?\nCTF打太多嗎?").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if ( msg.indexOf('siri') != -1 )
			event.reply("你當我TMD Siri?").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if ( (msg.indexOf('早安') != -1) || (msg == "早") || (msg == "早啊") || ( msg.indexOf('morning') != -1 ) )
			event.reply("早安啊!").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if ( ( msg.indexOf('晚安') != -1) || (msg.indexOf('good night') != -1) )
			event.reply("晚安!\n祝你有個好夢~").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if ( (msg.indexOf('滴妹') != -1 ) )
			event.reply({
				type: 'image',
				originalContentUrl: 'https://jplay01.com/img/aaaaamVwu.jpg',
				previewImageUrl: 'https://jplay01.com/img/aaaaamVwu.jpg'
			}).then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		else if ( (msg == "運勢") || (msg == "運氣") )
			event.reply("功能開發中").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});			
			/*var randtemp = Math.random %2;
			if (randomtemp == 0)(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
			else if (randomtemp == 1)
				event.reply("運氣有些差呢!").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});*/
		else
			/*event.reply(event.message.type).then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});*/
			event.reply("喔\n"+msg).then(function (data) {
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
