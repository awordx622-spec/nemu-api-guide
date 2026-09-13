# nemu-api-guide
nemuapi：统一的AI模型API接入与调用示例

#### 1.1 进入Nemu API的官网创建密钥（[Nemu.mikushop.party](https://nemu.mikushop.party))
1.打开官网，如下图所示：
<img width="1544" height="1449" alt="image" src="https://github.com/user-attachments/assets/ec9728d2-1dcc-4f76-9f9d-93b3b59880c5" />
2.注册完毕之后可以去用户页面，额度和活动以平台页面为准，我们就用这个额度来体验API调用流程。
接下来我们去API密钥界面，如下图所示：
<img width="2147" height="904" alt="image" src="https://github.com/user-attachments/assets/2c956560-cec1-4cdd-87fc-5e50d475f959" />
3.接着创建一个新的API密钥，流程可见下图
<img width="2516" height="920" alt="image" src="https://github.com/user-attachments/assets/9e3f4da3-f4f1-4683-9986-b0db590e6abd" />
4.同时我们也可以看到API调用端点那一栏，哪里就是API的基础地址（Base Url），这里我的调用地址我打码了
<img width="2016" height="359" alt="image" src="https://github.com/user-attachments/assets/072a9c64-9e0c-4e19-a1fe-1c3b4bf5735b" />
5.至此我们得到了API密钥，以及API的调用地址，那么接下来就是如何调用的问题了。

### 2. API调用方式
API调用方式有多种多样，有一些客户端调用，比如Cherry Studio、chat Box，还有一些Agent调用方式，比如Claude code、Codex、Openclaw、Hermes等等，他们各个都是token大户，接下来本文将介绍一些常见的客户端调用方式。
#### 2.1 Cherry Studio调用方式
1.首先我们可以进入[Cherry Studio](https://cherryai.com/)的官网下载自己所支持的客户端,这里我是Windows，就下载了win端。
<img width="2615" height="1124" alt="image" src="https://github.com/user-attachments/assets/65600b87-d28f-4cd9-a3e5-3c9078be7dce" />
2.下载并安装完成之后点击左下角的齿轮设置按钮
<img width="1967" height="1229" alt="image" src="https://github.com/user-attachments/assets/79074eee-3ad2-49aa-9af8-8f4efeddebd4" />
3.按照下图填入相关的配置：
<img width="1967" height="1229" alt="image" src="https://github.com/user-attachments/assets/b391b34b-addd-4470-a822-65fe836a2ec8" />
4.此时点击获取模型列表，就能获取这个API支持的模型，点击+号就可以后续调用此模型。
<img width="1010" height="811" alt="image" src="https://github.com/user-attachments/assets/bb071e5c-a800-4ce4-8161-3183ef4e5cc0" />
5.这时候我们回到Cherry Studio的主页面，上面就会显示我们刚才创建的API模型
<img width="1968" height="1229" alt="image" src="https://github.com/user-attachments/assets/a1bbf27e-44e7-46dc-8a48-3de42b8af3a4" />
6.这里选择最新版的ChatGpt-6 Astra试一下效果
<img width="1964" height="593" alt="image" src="https://github.com/user-attachments/assets/ba27fc35-6642-433a-8811-c7b7eab3d6d8" />
至此，Cherry Studio客户端如何配置的教程就结束了。
#### 2.2 Codex调用方式
1.Codex调用方式需要用到另一个工具，[CC Switch](https://www.ccswitch.io/zh/)，下载安装之后点击右上角+号，如下图所示：
<img width="1679" height="1122" alt="image" src="https://github.com/user-attachments/assets/199f1719-134d-4c71-bebd-9bdadc06e8bb" />
2.之后会到添加供应商界面，选择自定义配置，如下图所示：
<img width="1006" height="743" alt="image" src="https://github.com/user-attachments/assets/1913741e-cae8-4b4f-a3c8-c7b4fd511976" />
3.之后鼠标下滑，再按照图示填写相关信息，并且最后可以测试下延迟。
<img width="1688" height="1248" alt="image" src="https://github.com/user-attachments/assets/a389a737-303f-49bb-8006-c58e2fa36d3f" />
<img width="1152" height="386" alt="image" src="https://github.com/user-attachments/assets/1dff2a7d-3566-48da-a0fe-9179a9a51279" />

4.最后再图片下方获取并选择自己希望使用的模型
<img width="1690" height="1225" alt="image" src="https://github.com/user-attachments/assets/f212a3bd-f249-4949-b054-33da143e35e6" />
5.最后点击蓝色添加按钮，至此模型就成功添加到了CCswitch，最后点击启用就可以使用codex了，如下图所示：
<img width="1671" height="1015" alt="image" src="https://github.com/user-attachments/assets/e4cafecb-a3a8-4c89-8393-625d14986289" />
6.最后得到下面可用的codex，至此，Nemu api在Codex中的使用场景就结束了。
<img width="1709" height="1046" alt="image" src="https://github.com/user-attachments/assets/a70cbf46-177d-44ff-8c88-bccd40861885" />
谢谢大家的观看！
