const linebot = require('linebot');
const express = require('express');

const bot = linebot({
	channelId: process.env.CHANNEL_ID,
	channelSecret: process.env.CHANNEL_SECRET,
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const app = express();

const linebotParser = bot.parser();

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
const a1041 = '第一節  歷史\n第二節  公民\n第三節  生物\n第四節  生物\n第五節  化學\n第六節  地理\n第七節  數學\n第八節  國文'
app.get('/',function(req,res){
    res.send('Hello World!\t~~LineBot正常運作中~~');
});

app.post('/linewebhook', linebotParser);

bot.on('message', function (event) {
	var msg = event.message.text.toLowerCase();
	if ( event.message.type == "text" )
		if ( (msg.indexOf('嗨') != -1 ) || (msg.indexOf('你好') != -1) || (msg.indexOf('hi') != -1) || (msg.indexOf('哈囉')!=-1) )
			switch (getRandom(1,5)){
			case 1:
				event.reply("哈囉!").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});			
				break;
			case 2:
				event.reply("Hello!").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});		
				break;
			case 3:
				event.reply("嗨!").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});		
				break;
			case 4:
				event.reply("嗨嗨~").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;
			case 5:
				event.reply("不要跟我裝熟喔!").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});		
				break;
			default:
				event.reply("抱歉我似乎出了bug!\n請聯絡管理員...\nSorry~\n錯誤訊息:RAND_SWITCH_ERR_").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});		
				break;
			}			
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
		else if ( (msg == "彩蛋") || (msg.indexOf('gnsjhenjie') != -1) )
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
			switch (getRandom(1,10)){
			case 1:
				event.reply("晚安!\n祝你有個好夢~").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;
			case 2:
				event.reply("晚安!\n記得要開鬧鐘喔~").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;			
			case 3:
				event.reply("Good night!\nSweet dreams~").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;
			case 4:
				event.reply("晚安安~\n今天的星空也很美麗呢!").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;			
			case 5:
				event.reply("Good night!\nSleep tight!").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;			
			case 6:
				event.reply("晚安囉~\n今天好累啊...").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;			
			case 7:
				event.reply("祝好夢!").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;				
			case 8:
				event.reply("希望今天你不會做惡夢>_<").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;
			case 9:
				event.reply("晚安!").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;			
			case 10:
				event.reply("晚安啊!\n作業寫完了嗎?").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;			
			default:
				event.reply("抱歉我似乎出了bug!\n請聯絡管理員...\nSorry~\n錯誤訊息:RAND_SWITCH_ERR_").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});		
				break;		
			}
		else if (( msg.indexOf('午安') !=-1 ) || (msg.indexOf('good evening')!=-1) )
			event.reply("午安!\n睡完午覺了嗎?").then(function (data) {
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
		else if ( msg[0] == 'c' )
			if (msg.indexOf('104') != -1 )
				if ( msg[4] == '1' )
					event.reply("第一節  歷史\n第二節  公民\n第三節  生物\n第四節  生物\n第五節  化學\n第六節  地理\n第七節  數學\n第八節  國文\nFighting~~").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
				else if ( msg[4] == '2')
					event.reply("第一節  資訊\n第二節  資訊\n第三節  公民\n第四節  英文\n第五節  國防\n第六節  體育\n第七節  國文\n第八節  音樂\n今天有資訊課呢!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
				else if ( msg[4] == '3')
					event.reply("第一節  生命教育\n第二節  美術\n第三節  國文\n第四節  國文\n第五節  班會\n第六節  班會\n第七節  化學\n第八節  英文\n加U!!!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
				else if ( msg[4] == '4')
					event.reply("第一節  文教\n第二節  國文\n第三節  英文\n第四節  英文\n第五節  歷史\n第六節  數學\n第七節  數學\n今天沒有第八節耶~~").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
				else if ( msg[4] == '5')
					event.reply("第一節  選修\n第二節  選修\n第三節  英文\n第四節  數學\n第五節  地理\n第六節  體育\n第七節  數學\n準備放假囉!!!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});			
				else
					event.reply("您的輸入錯誤!請輸入help查看使用說明").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
			else
				event.reply("您的輸入錯誤!請輸入help查看使用說明").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
		else if (msg == 'help')
			event.reply("          ~~使用說明~~\n公開功能:\n(1)查詢課表:\n輸入c+班級+星期\n例:c1041 (104班星期一)\n\n(2)早午安:\n可以跟bot說早午安喔喔喔~\n\n(3)關於本程式:\n輸入about\n\n其他的都是隱藏功能喔~\n自己研究研究吧!").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});			
		else if (msg == 'about')
			event.reply("Author: gnsJhenJie\nGithub: gnsJhenJie\nVersion: 0.8.4.10").then(function (data) {
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
		switch (getRandom(1,3)){
		case 1:	
			event.reply(event.message.address+"\n這地方我大概沒去過吧!!\n可以帶我去嗎?").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
			break;
		case 2:
			event.reply(event.message.address+"\n我好像有去過這裡呢!!\n不過似乎又沒有.....").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
			break;
		case 3:
			event.reply(event.message.address+"\n是個有趣的地方呢!").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
			break;
		default:
			event.reply("抱歉我似乎出了bug!\n請聯絡管理員...\nSorry~\n錯誤訊息:RAND_SWITCH_ERR_location").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});		
			break;		
		}
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