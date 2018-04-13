//gnsJhenJie Copyright.

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

app.get('/',function(req,res){
    res.send('Hello World!\t~~LineBot正常運作中~~');
});

app.post('/linewebhook', linebotParser);

bot.on('message', function (event) {
	var MGNgroupId = 'C306d9846c600bf25360a8ad54655b9f4';
	if (event.message.type == 'text'){
	var msg = event.message.text;
	}
	if (event.source.groupId != MGNgroupId){
		var memberId =["Ucb700b5731e9de42f3fbd0da34811009","U70b7fa75c36a675ef91a8aefb067abd9","U9df8bf8b782462d85c01f9470a74a5ca"];
		var memberName = ["振杰","冠銘","楊翊"];
		var memberNickname = ["gnsJhenJie","Trout","馬演葛格"];
		var addMember = false;
		var Today = new Date();
		var yyyy = Today.getFullYear(); //年
		var MM = Today.getMonth()+1;    //月
		var dd = Today.getDate();       //日
		var h = Today.getHours();       //時
		var m = Today.getMinutes();     //分
		//var s = Today.getSeconds();     //秒
		var week = Today.getDay();     //星期幾
		var id ='id';
		var name = "";
		var nickname = "";
		if (event.source.type == 'user'){
			id = event.source.userId;
			name = memberName[memberId.indexOf(id)];
			nickname = memberNickname[memberId.indexOf(id)];
		}else if (event.source.type == 'group'){
			id = event.source.groupId;
		}
		if (h+8>=24){
			dd+=1;
			h=h-16;
			week+=1;
		}else{
			h=h+8;
		}
		if ( event.message.type == 'text' ){
			msg = msg.toLowerCase();			
			if ( (msg.indexOf('嗨') != -1 ) || (msg.indexOf('你好') != -1) || (msg.indexOf('hi') != -1) ){
				switch (getRandom(1,7)){
				case 1:
					event.reply(name+"哈囉!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});			
					break;
				case 2:
					event.reply("Hello!"+nickname+"!").then(function (data) {
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
				case 6:
					event.reply("哈囉!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});			
					break;
				case 7:
					event.reply("Hello!").then(function (data) {
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
			}else if (msg == 'test'){
				event.reply("TEST Success!").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
			}else if ( (msg.indexOf('tnfsh') != -1 ) || (msg.indexOf('南一中') != -1 ) ){
				switch (getRandom(1,6)){
				case 1:
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
					break;
				case 2:
					event.reply({
						type: 'location',
						title: '~TNFSH is Good~',
						address: '701台南市東區民族路一段1號',
						latitude: 22.9941884,
						longitude: 120.21599119999996
						}).then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;
				case 3:
					event.reply('中一中的總部(?\n噓.....').then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;
				case 4:
					event.reply('https://www.tnfsh.tn.edu.tw').then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;
				case 5:
					event.reply('來看看你考了甚麼爛成績吧!\nhttps://svrsql.tnfsh.tn.edu.tw/SCORESTD').then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});		
					break;
				case 6:
					event.reply('C++很好玩呢!!!\nhttps://moo.tnfsh.tn.edu.tw').then(function (data) {
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
			}else if ( (msg == "彩蛋") || (msg.indexOf('gnsjhenjie') != -1) ){
				event.reply("Ya!!\n你找到彩蛋啦!!!\n然後......\n然後就沒有然後了").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
			}else if (msg.indexOf('c++') != -1){
				event.reply("我看你只是想抄作業吧!\n請到: https://www.github.com/gnsJhenJie/mycpp \n不要太感謝我喔!\n段考自己看著辦囉~").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
			}else if ( (msg == 'root') || (msg == 'admin') || (msg == 'root') || (msg == 'administrator') ){
				event.reply("你以為這樣幹嘛?\nCTF打太多嗎?").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
			}else if ( msg.indexOf('siri') != -1 ){
				switch (getRandom(1,3)){
				case 1:
					event.reply('你當我TMD Siri?').then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;
				case 2:
					event.reply('我跟Apple沒有關係喔!!').then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;			
				case 3:
					event.reply('我不是Siri.....').then(function (data) {
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
			}else if ( (msg.indexOf('早安') != -1) || (msg == '早') || (msg == '早啊') || ( msg.indexOf('morning') != -1 ) ){
				if ((h>5)&&(h<10)){
					switch (getRandom(1,7)){
					case 1:
						event.reply("早安啊!").then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});
						break;
					case 2:
						event.reply("Good morning~").then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});
						break;				
					case 3:
						event.reply("早安!").then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});
						break;
					case 4:
						event.reply("Bonjour").then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});
						break;			
					case 5:
						event.reply("歐嗨喲~").then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});
						break;
					case 6:
						event.reply({
							type: 'sticker',
							packageId: 1,
							stickerId: 2
						}).then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});			
						break;
					case 7:
						event.reply({
							type: 'sticker',
							packageId: 1,
							stickerId: 137
						}).then(function (data) {
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
				}else{
					switch (getRandom(1,4)){
					case 1:
						event.reply('時間不早了吧....').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;								
					case 2:
						event.reply('你他媽是腦子有洞是不是啊?\n現在都幾點了?\n早甚麼早啊?').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;									
					case 3:
						event.reply('早什麼?\n老子都不老子了!').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;
					case 4:
						event.reply('希望你腦袋沒有洞....').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;		
					default:
						event.reply('抱歉我似乎出了bug!\n請聯絡管理員...\nSorry~\n錯誤訊息:RAND_SWITCH_ERR_morning').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;						
					}
				}
			}else if ( ( msg.indexOf('晚安') != -1) || (msg.indexOf('good night') != -1) ){
				if ((h>18)||(h<3)){
					switch (getRandom(1,11)){
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
					case 11:
						event.reply({
							type: 'sticker',
							packageId: 2,
							stickerId: 26
						}).then(function (data) {
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
				}else{
					switch (getRandom(1,4)){
					case 1:
						event.reply('現在是幾點啊....').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;								
					case 2:
						event.reply('你他媽是腦子有洞是不是啊?\n現在都幾點了?\n晚你妹的!').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;									
					case 3:
						event.reply('晚什麼?\n老子都不老子了!').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;
					case 4:
						event.reply('希望你腦袋沒有洞....').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;		
					default:
						event.reply('抱歉我似乎出了bug!\n請聯絡管理員...\nSorry~\n錯誤訊息:RAND_SWITCH_ERR_morning').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;						
					}				
				}
			}else if (( msg.indexOf('午安') !=-1 ) || (msg.indexOf('good evening')!=-1) ){
				if ((h>10)&&(h<16)){
					switch (getRandom(1,5)){
					case 1:
						event.reply('午安!\n睡完午覺了嗎?').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});			
						break;
					case 2:
						event.reply('午餐好吃嗎?\n我肚子好餓啊....').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});			
						break;				
					case 3:
						event.reply('午安!').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});			
						break;			
					case 4:
						event.reply('Good evening!').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});			
						break;						
					case 5:
						event.reply('加油!\n再半天就放學了~~').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});			
						break;					
					default:
						event.reply('抱歉我似乎出了bug!\n請聯絡管理員...\nSorry~\n錯誤訊息:RAND_SWITCH_ERR_').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;				
					}
				}else{
					switch (getRandom(1,4)){
					case 1:
						event.reply('現在是幾點啊....').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;								
					case 2:
						event.reply('你他媽是腦子有洞是不是啊?\n現在都幾點了?\n晚你妹的!').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;									
					case 3:
						event.reply('晚什麼?\n老子都不老子了!').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;
					case 4:
						event.reply('希望你腦袋沒有洞....').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;		
					default:
						event.reply('抱歉我似乎出了bug!\n請聯絡管理員...\nSorry~\n錯誤訊息:RAND_SWITCH_ERR_morning').then(function (data) {
							console.log('Success', data);
						}).catch(function (error) {
							console.log('Error', error);
						});		
						break;						
					}			
				}
			}else if (msg == '時間'){
				event.reply(yyyy+'年'+MM+'月'+dd+'日'+h+'時'+m+'分'+' 星期'+week).then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});						
			}else if ( (msg.indexOf('滴妹') != -1 ) ){
				event.reply({
					type: 'image',
					originalContentUrl: 'https://jplay01.com/img/aaaaamVwu.jpg',
					previewImageUrl: 'https://jplay01.com/img/aaaaamVwu.jpg'
				}).then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
			}else if ( (msg.indexOf('運勢') != -1) || (msg.indexOf('運氣') != -1) || (msg.indexOf('fortune') != -1) ){
				switch (getRandom(1,15)){
				case 1:
					event.reply("今天的運勢真的很差很差呢!\n\n過馬路的時候多注意左右來車吧~\n凡事謹慎為上策!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;
				case 2:
					event.reply("今天的運勢還蠻差的喔><\n\n建議你做事前多想想!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;
				case 3:
					event.reply("今天你的運勢不太好喔...").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;
				case 4:
					event.reply("啊啊啊......\n\n我竟然沒辦法判斷你今天的運勢\n看來我的功力還不夠呢!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
					console.log('Error', error);
					});
					break;
				case 5:
					event.reply("今天你的運勢普普通通!!\n\n就照你平常的樣子吧!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
					console.log('Error', error);
					});
					break;
				case 6:
					event.reply("你今天的運勢....\n......  ....\n大概普普通通吧!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
					console.log('Error', error);
					});
					break;
				case 7:
					event.reply("今天的運勢還不錯喔喔喔喔喔~~~\n\n好好把握這些運氣吧!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
					console.log('Error', error);
					});
					break;
				case 8:
					event.reply("Hello, world!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
					console.log('Error', error);
					});
					break;
				case 9:
					event.reply("今天運勢很棒呢!!!\n\n分些運氣給我嘛~~").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
					console.log('Error', error);
					});
					break;
				case 10:
					event.reply("哇! 你的運氣好的不像話!!!!\n\n難道是我猜錯了嗎??").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
					console.log('Error', error);
					});
					break;
				case 11:
					event.reply("今天的運勢普普通通啦~~\n沒啥好說的~").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
					console.log('Error', error);
					});
					break;
				case 12:
					event.reply("我累啦...\n不幫你占卜囉~~").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
					console.log('Error', error);
					});
					break;
				case 13:
					event.reply("想知道今天的運勢嗎?\n先教些錢出來!!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
					console.log('Error', error);
					});
					break;
				case 14:
					event.reply("今天的天氣就跟你的運勢一樣呢!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
					console.log('Error', error);
					});
					break;
				case 15:
					event.reply("哈哈哈哈哈").then(function (data) {
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
			}else if (msg == 'member'){
				if (name == ""){
					event.reply("您不是會員").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});							
				}else{
					event.reply("您是會員").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});								
				}
			}else if ( msg[0] == 'c' ){
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
			}else if ((msg == '今日課表')||(msg == '今天課表')||(msg == '本日課表')){
				switch (week){
				case 1:
					event.reply("第一節  歷史\n第二節  公民\n第三節  生物\n第四節  生物\n第五節  化學\n第六節  地理\n第七節  數學\n第八節  國文\nFighting~~").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});			
					break;
				case 2:
					event.reply("第一節  資訊\n第二節  資訊\n第三節  公民\n第四節  英文\n第五節  國防\n第六節  體育\n第七節  國文\n第八節  音樂\n今天有資訊課呢!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});			
					break;
				case 3:
					event.reply("第一節  生命教育\n第二節  美術\n第三節  國文\n第四節  國文\n第五節  班會\n第六節  班會\n第七節  化學\n第八節  英文\n加U!!!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});				
					break;
				case 4:
					event.reply("第一節  文教\n第二節  國文\n第三節  英文\n第四節  英文\n第五節  歷史\n第六節  數學\n第七節  數學\n今天沒有第八節耶~~").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});				
					break;
				case 5:
					event.reply("第一節  選修\n第二節  選修\n第三節  英文\n第四節  數學\n第五節  地理\n第六節  體育\n第七節  數學\n準備放假囉!!!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});					
					break;
				case 6:
					event.reply("今天星期六喔!\n你該不會去學校了吧...").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});					
					break;				
				case 7:
					event.reply("今天星期日.....\n我不會被你騙的!!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});					
					break;									
				default:
					event.reply("抱歉我似乎出了bug!\n請聯絡管理員...\nSorry~\n錯誤訊息:RAND_SWITCH_ERR_todayClass").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});		
					break;					
				}
			}else if ((msg == '明日課表')||(msg == '明天課表')){
				switch (week+1){
				case 2:
					event.reply("第一節  資訊\n第二節  資訊\n第三節  公民\n第四節  英文\n第五節  國防\n第六節  體育\n第七節  國文\n第八節  音樂\n明天有資訊課呢!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});			
					break;
				case 3:
					event.reply("第一節  生命教育\n第二節  美術\n第三節  國文\n第四節  國文\n第五節  班會\n第六節  班會\n第七節  化學\n第八節  英文\n加U!!!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});				
					break;
				case 4:
					event.reply("第一節  文教\n第二節  國文\n第三節  英文\n第四節  英文\n第五節  歷史\n第六節  數學\n第七節  數學\n明天沒有第八節耶~~").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});				
					break;
				case 5:
					event.reply("第一節  選修\n第二節  選修\n第三節  英文\n第四節  數學\n第五節  地理\n第六節  體育\n第七節  數學\n準備放假囉!!!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});					
					break;
				case 6:
					event.reply("明天放假!!!\n有爽到嗎?").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});					
					break;
				case 7:
					event.reply("明天是星期日....\n你腦袋沒有洞吧...").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});			
					break;							
				case 8:
					event.reply("第一節  歷史\n第二節  公民\n第三節  生物\n第四節  生物\n第五節  化學\n第六節  地理\n第七節  數學\n第八節  國文\n明天記得起床喔!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});			
					break;				
				default:
					event.reply("抱歉我似乎出了bug!\n請聯絡管理員...\nSorry~\n錯誤訊息:RAND_SWITCH_ERR_todayClass").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});		
					break;					
				}
			}else if (msg == 'help'){
			event.reply("          ~~使用說明~~\n公開功能:\n(1)查詢課表:\n輸入c+班級+星期\n例:c1041 (104班星期一) 或 今日/明日課表\n\n(2)早午安:\n可以跟bot說早午安喔喔喔~\n\n(3)關於本程式:\n輸入about\n\n(4)本日運勢:\n輸入甚麼呢?自己試試看吧!\n\n(5)會員功能:\n目前此個人化功能開發中,歡迎先加入會員\n加入會員方法:\n輸入: 加入會員+姓名+暱稱+生日+班級\n\n(6)聯絡管理員:\n訊息中包含「聯絡管理員」即可\n\n(7)查看隱私權政策:\n輸入policy\n\n(8)確認會員資格:\n輸入member\n\n其他的都是隱藏功能喔~\n自己研究研究吧!").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});			
			}else if (msg == 'about'){
				event.reply("Author: gnsJhenJie\nGithub: gnsJhenJie\nVersion: 1.8.4.13").then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});	
			}else if ( (msg.indexOf('幹') != -1) || (msg.indexOf('fuck') != -1) || (msg.indexOf('操你媽') != -1) || (msg.indexOf('shit')!=-1)){
				switch (getRandom(1,4)){
				case 1:
					event.reply("趕羚羊!\n操你媽derB").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;
				case 2:
					event.reply("Fuck!\nYour fucking dick is too small!!").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;				
				case 3:
					event.reply("森77\n森77\n森77\n森77\n森77\n森77\n森77").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;			
				case 4:
					event.reply({
						type: 'sticker',
						packageId: 1,
						stickerId: 100
					}).then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;
				case 5:
					event.reply({
						type: 'image',
						originalContentUrl: 'https://www.gnsjhenjie.me/botpic/KoPAngry.gif',
						previewImageUrl: 'https://www.gnsjhenjie.me/botpic/KoPAngry.gif'
					}).then(function (data) {
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
			}else if (msg.indexOf('哈囉')!=-1){
				event.reply('好啊').then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
			}else if (msg.indexOf('加入會員')!=-1){
				event.reply('感謝您加入會員,我們將於72hr內確認您的申請').then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});			
				var sendMsg = '~~新會員加入申請~~\n\nuserId: '+event.source.userId+'\nmessage: '+event.message.text;
				bot.push(MGNgroupId,sendMsg);
				console.log('send: '+sendMsg);
			}else if (msg.indexOf('聯絡管理員')!=-1){
				event.reply('我們已收到您的訊息,我們將盡速回覆您!').then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});			
				var sendMsg = '~~聯絡管理員~~\n\nuserId: '+event.source.userId+'\nmessage: '+event.message.text;
				bot.push(MGNgroupId,sendMsg);
				console.log('send: '+sendMsg);
			}else if (msg == 'policy'){
				event.reply('Q:管理員看得到我傳送的訊息嗎?\nAns:除了包含「加入會員」或「聯絡管理員」的訊息,其餘訊息管理員將不會記錄其內容\n\nQ:管理員知道我有發送訊息嗎?\nAns:第一次發送訊息後(需為2018/4/13日之後發送)3~5個工作日後,管理員不會紀錄發送訊息的紀錄\n\nQ:有關加入會員\nAns:申請加入會員(或聯絡管理員)後管理員可以對您主動對您發送訊息,但紀錄您的訊息規則同前述\n\n本隱私權政策以最新版為主').then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});							
			}else if (msg == 'userid'){
				event.reply(event.source.userId).then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
			}else if (msg == 'groupid'){
				event.reply(event.source.groupId).then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});			
			}else{
				switch (getRandom(1,3)){
				case 1:
					event.reply("喔\n"+event.message.text).then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;
				case 2:
					event.reply("是喔\n"+event.message.text).then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;	
				case 3:
					event.reply(event.message.text+'\n顯然地,這是句廢話!').then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});
					break;			
				default:
					event.reply("抱歉我似乎出了bug!\n請聯絡管理員...\nSorry~\n錯誤訊息:RAND_SWITCH_ERR_replyUnrecog").then(function (data) {
						console.log('Success', data);
					}).catch(function (error) {
						console.log('Error', error);
					});		
					break;						
				}
			}
		}
		else if (event.message.type == "sticker"){
			if ( (event.message.packageId == "1") ||(event.message.packageId == "2") || (event.message.packageId == "3") ||(event.message.packageId == "4")){
				event.reply({
					type: 'sticker',
					packageId: event.message.packageId,
					stickerId: event.message.stickerId
				}).then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
			}
			else{
				event.reply({
					type: 'sticker',
					packageId: 1,
					stickerId: 1
				}).then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});		
			}
		}
		else if (event.message.type == "audio"){
			event.reply("聽不懂ㄏㄏ").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}
		else if (event.message.type == "image"){
			switch (getRandom(1,5)){
			case 1:
				event.reply({
					type: 'image',
					originalContentUrl: 'https://www.gnsjhenjie.me/botpic/YouSoGood.jpg',
					previewImageUrl: 'https://www.gnsjhenjie.me/botpic/YouSoGood.jpg'
				}).then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;
			case 2:
				event.reply({
					type: 'image',
					originalContentUrl: 'https://www.gnsjhenjie.me/botpic/JustAsk.jpg',
					previewImageUrl: 'https://www.gnsjhenjie.me/botpic/JustAsk.jpg'
				}).then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;		
			case 3:
				event.reply({
					type: 'image',
					originalContentUrl: 'https://www.gnsjhenjie.me/botpic/TakeCareStupid.jpg',
					previewImageUrl: 'https://www.gnsjhenjie.me/botpic/TakeCareStupid.jpg'
				}).then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;	
			case 4:
				event.reply({
					type: 'image',
					originalContentUrl: 'https://www.gnsjhenjie.me/botpic/JayDont.jpg',
					previewImageUrl: 'https://www.gnsjhenjie.me/botpic/JayDont.jpg'
				}).then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;	
			case 5:
				event.reply({
					type: 'image',
					originalContentUrl: 'https://www.gnsjhenjie.me/botpic/CanWeDoIt.jpg',
					previewImageUrl: 'https://www.gnsjhenjie.me/botpic/CanWeDoIt.jpg'
				}).then(function (data) {
					console.log('Success', data);
				}).catch(function (error) {
					console.log('Error', error);
				});
				break;	
			case 6:
				event.reply({
					type: 'image',
					originalContentUrl: 'https://www.gnsjhenjie.me/botpic/WeMissHim.jpg',
					previewImageUrl: 'https://www.gnsjhenjie.me/botpic/WeMissHim.jpg'
				}).then(function (data) {
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
		}
		else if (event.message.type == "file"){
			event.reply("我才不打開來路不明的檔案咧!\n我中毒了你要負責嗎?\n要讓我壞掉沒這麼容易的!!!").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});
		}
		else if (event.message.type == "location"){
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
		}
		else{
			event.reply("抱歉無法辨識您的message type!\n請聯絡管理員...\nSorry~\n錯誤訊息:TYPE_ERR("+event.message.type+")").then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});		
		}
		if (event.source.type == 'room'){
			var sendMsg = 'roomId: '+event.source.roomId+'\nuserId: '+event.source.userId;
			bot.push(MGNgroupId,sendMsg);
			console.log('send: '+sendMsg);	
		}else if (event.source.type == 'user'){
			switch (event.source.userId){
				case 'Ucb700b5731e9de42f3fbd0da34811009':
					break;
				case 'U9df8bf8b782462d85c01f9470a74a5ca':
					break;
				case 'U70b7fa75c36a675ef91a8aefb067abd9':
					break;
				case 'U6d712ea00dfa51179acca23f571ac754':
					break;
				case 'U244cc21319e97055a6470b8d3d8391ff':
					break;
				case 'Ue7c606c98bb9bac41b74d91f936a0d84':
					break;
				case 'Ub07acba225868a33eb6d7d744a421074':
					break;
				default:
					var sendMsg = 'userId: '+event.source.userId;
					bot.push(MGNgroupId,sendMsg);
					console.log('New Frienf\nsend: '+sendMsg);
					break;
			}
		}else if (event.source.type == 'group'){
			var sendMsg = 'groupId: '+event.source.groupId+'\nuserId: '+event.source.userId;
			bot.push(MGNgroupId,sendMsg);
			console.log('send: '+sendMsg);		
		}
	}else{
		/*
		sent
		[USERID]
		message
		*/
		if (msg.indexOf('sent')==0){
			var command = event.message.text;
			var destination = command.substring(command.indexOf("\n")+1,command.lastIndexOf("\n"));
			var message = command.slice(command.lastIndexOf("\n")+1);			
			bot.push(destination,message);
			event.reply("發送訊息成功!\n對象:\n"+destination+"\n訊息:"+message).then(function (data) {
				console.log('Success', data);
			}).catch(function (error) {
				console.log('Error', error);
			});					
		}
	}
});
setTimeout(function(){
    var groupId = 'C306d9846c600bf25360a8ad54655b9f4';
    var sendMsg = '管理員通知:bot重啟完成';
    bot.push(groupId,sendMsg);
    console.log('send: '+sendMsg);
},5000);
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