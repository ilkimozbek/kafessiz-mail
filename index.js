/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

app.get('/', async function(req, res) {
    const anemon = ['oguz.akcura@anemonhotels.com', 'ismail.akcura@anemonhotels.com', 'hasim.akcura@anemonhotels.com', 'asli.akcura@anemonhotels.com','salim.yavas@anemonhotels.com', 'ugur.sahbaz@anemonhotels.com', 'aytekin.acikgoz@anemonhotels.com', 'taylan.sargin@anemonhotels.com']
    const barut = ['birgul.akgul@baruthotels.com', 'mkurtulmus@baruthotels.com', 'sonen@baruthotels.com', 'turan.kaplan@baruthotels.com', 'ibrahim.yilmaz@baruthotels.com', 'onder.balci@baruthotels.com', 'binnur.dulger@baruthotels.com']
    const crystal = ['tolgakilit@kilitgroup.com', 'turankilit@kilitgroup.com', 'necdetguven@crystalhotels.com.tr', ' ceo@crystalhotels.com.tr', 'adilgurkan@kilithg.com', 'fatihcelik@crystalhotels.com.tr', 'alperkarakas@crystalhotels.com.tr', 'melekyildiz@crystalhotels.com.tr']
    const kaya = ['burak.kaya@kayahotels.com.tr', 'doruk.kaya@kayahotels.com.tr', 'ufuk.karakus@kayahotels.com.tr', 'ali.kocak@kayahotels.com.tr', 'hasan.aykut@kayahotels.com.tr', 'sami.turkay@kayahotels.com.tr']
    const hotels = [anemon, barut, crystal, kaya]
    const hotel = hotels[Math.floor(Math.random() * hotels.length)]
    const address_1 = hotel[Math.floor(Math.random() * hotel.length)]
    const address_2 = hotel[Math.floor(Math.random() * hotel.length)]
    const address_3 = hotel[Math.floor(Math.random() * hotel.length)]
    const address_4 = hotel[Math.floor(Math.random() * hotel.length)]
    const address_5 = hotel[Math.floor(Math.random() * hotel.length)]
    const address_6 = hotel[Math.floor(Math.random() * hotel.length)]
    const address_7 = hotel[Math.floor(Math.random() * hotel.length)]

    const receiver = address_1 + ',' + address_2 + ',' +address_3 + ',' +address_4 + ',' +address_5 + ',' + address_6 + ',' +address_7
    const subjects = ['kafese hayır', 'eziyete karşıyım','kafes eziyetine karşıyım', 'Kafeslere Hayır', 'Kafesleri terk edin',
    'Yumurta kullanımınız', 'Kafeslere hayır', 'kafese son', 'Eziyet son bulsun', 'Hayvan eziyeti', 'hayvan eziyeti', 'eziyet bitsin','taahhüt','kafes yumurtasını bırakın','Kafes yumurtasını bırakın', 'Hayvana eziyet', ' tavuklara özgürlük', 'Yumurtalar', 'yumurta', 'Kafeslere karşıyız', 'kafese karşıyım', 'kafese karşıyız',
    'eziyete hayır', 'kafesler son bulsun', 'Eziyete son', 'Kafes yumurtası kullanımınız', 'kafes yumurtası', 'Kafes Yumurtası', 'Kafes yumurtası', 'Kafes yumurtası hk.', 'Yumurta hakkında', 'Yumurtalarınız hakkında', 'Kafes yumurtası hakkında', 'Tavukları bırakın', 'Tavukları kurtarın', 'Hayvanları kurtarın', 'Yumurta eziyeti', 'yumurta eziyeti', 'Eziyete dur deyin', 'kafes eziyeti', 'Kafes işkencesi',
    'Kafes eziyeti', 'Lütfen', 'Doğru olanı yapın', 'kafessiz yumurta', 'Kafesleri bırakın', 'kafesleri bırak', 'Kafesleri terk edin', 'Kafeslere dur deyin' ]
    const subject = subjects[Math.floor(Math.random() * subjects.length)]
    
    const bodies = ['Sayın yetkili,\r\n\r\nİnternet üzerinden otelinizin servis ettiği yumurtaların eziyet dolu bir sistemle elde edildiğini öğrendim ve bu konudaki üzüntümü size bildirmek istedim. Lütfen bu eziyeti durdurun.\r\n\r\nSaygılarımla,',

    'Sayın İlgili,\r\n\r\nKafes denen işkenceye son vermenin zamanı geldi de geçiyor bile. Sizden de bu konuda adım atmış olan oteller gibi doğru olanı seçmenizi ve istenen taahhüdü vermenizi rica ediyoruz. Müşterilerin taleplerine kulak tıkamayın.\r\n\r\nTeşekkürler',
    'Lütfen duyarlılık ve vizyon sahibi olduğunuzu gösterin, kafes sistemini terk edin.',
    'Sayın yetkili,\r\n\r\nHayvan haklarının bu denli gündemde olduğu bir dönemde bu otelin hâlâ daracık kafeslerde eziyet gören tavuk yumurtalarını kullanmakta ısrarcı olması beni çok rahatsız etti. Türkiye’nin en büyük otel zincirlerinden birinin böyle çağ dışı bir eziyeti desteklemesi kabul edilir değil. Siz bu konuyla ilgili gerekeni yapana kadar markanızı boykot ettiğimi belirtmek isterim.',
    'Ülkemizdeki birçok otel zinciri kafes yumurtası kullanmayı bırakmışken sizin ne eksiğiniz var? Misafirlerinize layık gördüğünüz bu mu gerçekten?',
    'Hayvan eziyetini tedarik zincirinizden çıkarana kadar hiçbir otelinize adım atmam.',
    'Otellerde kafessiz yumurta servisi istiyoruz. Lütfen gerekeni yapın.',
    'Kafeslerde hayvan istemiyorum. Çevreye ve hayvanlara karşı duyarlı olmanızı bekliyorum.',
    'Hayvanların kafeslerde tutulmasına karşıyım. Sizin gibi bir otele kafes yumurtası kullanmak yakışmıyor. Duyarlılık bekliyoruz.',
    'Neden bunca otel zinciri kafessiz yumurta kullanımı sözü verirken siz veremiyorsunuz? Hayvan eziyetinin boyutundan haberdar değil misiniz?',
    'Merhabalar,\r\nİnternette otelinizin halen kafessiz tavuk sistemine geçmediğine dair yazılar okudum. Daha önce misafiriniz olmuş biri olarak merak ediyorum, oteliniz halen kafessiz tavuk sistemine dahil değil mi? Bilgilendirme için şimdiden teşekkür ederim.',
    'Merhaba,\r\nSosyal medya platformlarında kafeste yetiştirilen tavukları gördüğüm günden beri kafes yumurtası kullanan işletmelerine yanaşmıyorum. Oteliniz neden kafessiz tavuk sistemine geçmiyor? Hayvan hakları, böyle prestijli bir marka için hiçbir anlam ifade etmiyor mu?',
    'Merhaba,Otelinizin yumurta tedariğini kafes sisteminden sağladığını öğrendim. Bu durum markanızdan hemen soğumama sebep oldu. Bu konuyla ilgili gerekli aksiyonları almanızı talep ediyorum.',
    'Sosyal medyadaki görseller ve tepkilerden sonra kafes eziyetine son verme konusunda sorumluluk almak yerine sessiz kalmaya devam mı edeceksiniz?',
    'Merhaba,\r\ntatilkarnesi.com sitesinde firmanız hakkında yürütülen imza kampanyasını gördüm ve kanım dondu açıkçası. Sizin gibi saygın bir firmanın hem insan sağlığı hem de hayvan hakları açısından daha duyarlı olmasını beklerdim. Müşterilerinizi buna layık görmenizin nedenini anlayabilmek mümkün değil. Umarım misafirlerinizin hayvan haklarına önem verdiğini anlar ve bir an önce bu politikanızı değiştirirsiniz.',
    'Sayın Yönetici,\r\nVereceğiniz tek bir kararla binlerce hayvanın hayatını değiştirebilirsiniz. Lütfen doğru olanı yapın ve hayvanlar için bir kahraman olun. Otellerinize kod 3 ile başlayan barkodlu yumurta alınmamasını sağlamanızı rica ediyorum.',
    'Sayın otel yöneticileri,\r\nBu kadar fazla zincirin terk ettiği kafes yumurtası uygulamasını markanızda ısrarla sürdürmeniz utanç verici. Buna son verilene kadar itirazımız sürecek.',
    'Binlerce hayvanı eziyetten kurtarma gücüm olsa, onları kurtarmak için bir saniye bile tereddüt etmezdim. Siz bu imkana sahipsiniz. Neden bu konuda bir şey yapmıyorsunuz?',
    'Hayvana şiddetin her türünü kınıyorum.',
    'Hayvanlara eziyet artık dursun istiyorum.',
    'Sayın ilgili,\r\nOteliniz müşterisine mümkün olan en kaliteli hizmeti sunmalı ve kafes yumurtası kullanımını terk etmeli. Kar etmekten daha önemli şeyler de var.',
    'Neden güncel uygulamaları takip edip kafessiz sisteme geçmemekte ısrar ediyorsunuz? Kendi müşterilerinizin bu eziyete karşı duyarsız olduklarını mı düşünüyorsunuz?',
    'Tatil karnesi kampanyasını tüm arkadaşlarımla paylaştım ve kafessiz sisteme geçmeyen otelleri boykot etmeleri konusunda onları teşvik edeceğim.',
    'Merhaba sayın yetkililer , Türkiye’de çok sayıda tüketici ve hayvansever otel ve işletmelerinizde servis ettiğiniz yumurtayı kafes sistemini kullanmayan tedarikçilerden edinmenizi istiyor. Kampanyadan haberiniz var mı? Bu konuda bir açıklama yapmayı düşünüyor musunuz?',
    'Merhaba. Binlerce tavuğu kafeslerden çıkarma gücüne sahipsiniz. Lütfen elinizdeki gücü bu tavukları kurtarmak için kullanın. Hayvanlar eziyetsiz bir yaşamı hak ediyor.',
    'Sayın ilgili, internette bir kampanya gördüm ve öğrendiklerim beni çok rahatsız etti. Oteliniz de ülkemizdeki birçok marka gibi bir kafessiz sistem taahhüdü yayınlayacak mı?',
    'Kaliteli hizmet almak için gittiğim bir otelde hayvan eziyetinden dolayı kötü hissetmek istemiyorum. Yumurta politikanızı lütfen değiştirin.',
    'Hayvanlara karşı gösterilen nefretten ve şiddetten bıktım onlar da birer canlı. Lütfen bundan vazgeçin.',
    'Hayvanların etinden sütünden yumurtasından faydalanıyoruz bari onlara eziyet etmeyelim. Daracık kafeste tutmak sistematik işkencedir. Lütfen bundan vazgeçiniz. Saygılarımla.',
    'Bizim korumamızda olan bu canlıların tüm yaşamlarını kafes içinde kıpırdamadan geçirme işkencesine şiddetle karşıyım. Kafessiz sisteme geçmenizi istiyorum.',
    'Hayvanlar da can taşıyor. Onların zarar görmesini istemiyorum. Artık kafes sistemine son verin.',
    'Sayın İlgili,\r\nTürkiye’nin en büyük yerli otel zincirlerinden birini yönetiyorsunuz. Böyle bir şirket hayvan refahı konusunda  çağın gerisinde kalmamalı. Tedarik zincirlerinde kafes kullanımına son vermeli. Hayvanların ömür boyu kafese kapatılması kabul edilemez.',
    'Sosyal medyada paylaşılan resimleri gördüm, tavukların kafeste maruz kaldıkları muamele utanç verici ve insanlık dışı. Bir daha size bağlı yerlerde bir şey yiyip içebileceğimi sanmıyorum.',
    'Bir sürü otel zinciri teker teker kafessiz sistem taahhüdü veriyor. Siz neden ısrar ediyorsunuz? Sizin gibi bir şirket bu meseleyi çoktan halletmiş olmalıydı.',
    'Selamlar,\r\nKafes sistemi hayvanlara eziyet ediyor ve toplum sağlığını hiçe sayıyor. Tavukların kafesteki halleri dehşet verici. Kafes yumurtası kullanmaya lütfen son verin.',
    'Sayın İlgili,\r\nKafes eziyetine ve vahşetine son vermenizi rica ediyorum. Tedarikçilerinizi uyarın veya değiştirin.',
    'Türkiye’de dünyadaki gıda standartlarını yakalamak için lütfen başka otel şirketlerinin de yaptığı gibi kafessiz sisteme geçin.',
    'Bir sürü imzacı gibi ben de otelinizin tedarik zincirinden kafes yumurtasını çıkarması için imza verdim. Hayvanların kafeslerde çektiklerinin kabul edilebilir hiçbir yanı yok. Artık kafes sistemini lütfen terk edin.',
    'Beynimizle neleri algılıyor neleri öğreniyor da binlerce hatta milyonlarca hayvanın eziyetini hayal bile edemiyoruz. Belki de idrak edemediğimiz için bu akıl almaz vahşeti hayal etmeyi bile reddediyoruz. Paradan daha önemli şeyler de var. Hayvanlar bundan iyisini hak ediyor.',
    'Oteliniz müşterilerine neden kötü içerik yedirmeye devam ediyor? Üç beş kuruşluk kâr için kafes yumurtası vermeye değer mi?',
    'Otellerde kullanılan yumurtalar ile ilgili korkunç resimler paylaşılıyor sosyal medyada, bir açıklamanız var mı?',
    'Türkiyede koskoca zincirler kafessiz sistem taahhütü verdi. Markanız hayvan hakları standartlarında sektörün gerisinde mi kalacak böyle?',
    'Kafes yumurtası kullanmayı bırakana kadar otellerinize adımımı dahi atmayacağım.',
    'Sosyal medyada gördüğüm görsellerden anladım ki sizin müşteriniz olmak son derece etik dışı uygulamaların olduğu bir kuruluşa bilmeden destek olmakmış. Şikayetleri göz ardı etmeye devam edecekseniz bir daha yanınızdan bile geçmem.',
    'O masum tavukların neler yaşadığının tüm müşterileriniz elbet bir gün farkına varacak hatta farkına varmaya başladı bile. Kafessiz sisteme geçin artık. Bu işkenceye daha fazla göz yumamazsınız.',
    'Sosyal medyada gördüğüm hayvan görsellerinden sonra işin aslını araştırmaya karar verdim ve gerçekten de kafes sistemiyle üretilen yumurtalara karşı hiçbir açıklamanız yok. Dolaylı da olsa bu zulme ortak olmak istemiyorum. Lütfen bu uygulamanızdan vazgeçin.',
    'Tüketici bu kadar duyarlıyken sizin onları hiçe saymanız korkunç. Bu konuda hem arkadaşlarım ve yakın çevremdeki kişilerin durumun ciddiyetini anladı ve tepki görüyorsunuz.',
    'Sayın yetkili,\r\n\r\nNeden otelinizi hala kafessiz tavuk sistemine geçirmiyorsunuz? Kafeslerde tavukların A4 kağıdı kadar bile olmayan yerde yaşam sürdüklerini biliyor musunuz? Ben kafesteki tavuk görüntülerini gördükten sonra kafessiz tavuk sistemine geçmeyen yerlere para kazandırmama kararı aldım ve bunu çevremde de anlatıyorum. Lütfen kafessiz tavuk taahhüdü için gerekeni yapın.',
    'Sayın ilgili,\r\nTavukların kafeste A4 kağıdı kadar olmayan yerde yaşadığı sistemi terk etmenin maliyetinin oldukça düşük olduğunu biliyor musunuz? İşletmelerinizin doğa ve yaşama duyarlı olduğunu biliyor ve derhal kafessiz tavuk taahhüdünün verilerek bu sisteme geçileceğine inanıyorum.',
    'İlgilisine,\r\nBu otelin halen kafessiz tavuk sistemine geçmediğinizi sosyal medya aracılığıyla öğrendim. Diğer duyarlı firmalardan farklı olarak kafessiz tavuk sistemine neden geçmediğinizi anlayamadım. Lütfen bu konuda bilgi verir misiniz, benim için çok önemli.',
    'Sayın Yetkililer,\r\nOtelinizin halen kafessiz tavuk sistemine geçmediğini öğrendim, bu konuda farkındalık kampanyaları yapılıyor ve pek çok insan bu durumu fark etti. Ama ben sizin duyarlılık göstereceğinizden bu taahhüdü yayınlayacağınızdan eminim. Bu konuda tarafımı bilgilendirebilir misiniz?',
    'Sayın Yetkili,\r\nBir sürü şirket tek tek  kafessiz yumurta kullanımı taahhüdü verirken sizin markanızın bu uygulamaya geçmemek için direndiğini öğrendim. Küçücük kafeslere sıkışıp kalan tavuklara işkence etmek için bu kadar ısrarcı olmanız bu markaya duyduğum bütün sempatiyi yok etti. Kafes yumurtası kullanımını terk edene kadar önünüzden bile geçmeyi düşünmüyorum.',
    'Merhaba, Son zamanlarda sosyal medyada sıkça kafes sisteminde eziyet çeken tavukların görsellerine denk geliyordum. Bunun üstüne bir de sizin de yumurtalarınızı bu sistemlerden tedarik ettiğini öğrenince daha da rahatsız oldum. Bu sistemi terk edene kadar markanıza para kazandırmayı düşünmüyorum.',
    'Merhaba,\r\nSosyal medyada yumurta tedariğini kafes sisteminden yaptığınızı öğrendim. Böyle bir sistemi kullanmanızın marka imajınızla uyuşmadığını düşünüyorum. Dilerim en kısa zamanda kafes sistemini terk etmek için gerekeni yaparsınız.',
    'Sayın Yetkili,\r\nSosyal medyada firmanızla ilgili yapılan kampanyaları gördüm. Araştırmalarım sonucunda Türkiye’de bir sürü büyük zincirin ürünlerinde kullandığı yumurtaları kafessiz sistemden tedarik etme sözü verdiğini öğrendim. Kafes sistemi hakkında daha öncesinde çok da ayrıntılı bir bilgim yoktu. Fakat görsellerle ilgili yazıları okuduğumda bu sistemde, bir tavuğa sadece A4 kağıdı kadar alan düştüğünü öğrendim. Açıkçası bu bilgiyi öğrendikten sonra müşteriniz olursam kendimi çok kötü hissederim. Umarım firmanız bu uygulamaya son verme konusunda gerekli adımları atar.',
    'Merhaba, Tüm canlılar gibi tavukların da doğalarına uygun şekilde kısacık yaşamlarını huzurla sürdürebilmelerini istiyorum. Bu otel öğrendiğim kadarıyla kanatlarını dahi açamayan tavukların ürettiği yumurtaları satın almaya devam ediyor. Açıkçası böyle büyük bir firmanın sürdürülebilir doğal çevre ve hayvan hakları adına çağın gerisinde kalan kafes sisteminden üretilen yumurtaları kullanmaya devam etmesini aklım almıyor. Bu uygulamaya markanızda son vermenizi gönülden diliyorum.',
    'Merhaba,\r\nKafes yumurtacılığında bir tavuğun ömrü ortalama doğal yaşam süresi olan yedi yıldan bir yıla kadar düşüyormuş nerdeyse. Bugün sosyal medyada gezinirken otelinizin yumurta ihtiyacını kafes yumurtasından sağladığını öğrendim. Bu durum beni hem üzdü, hem de büyük bir hayal kırıklığına uğrattı. Böyle saygın firmaların dahi, küçük karlar uğruna, acısız ve hayvan dostu bir sistem yerine bu eziyeti tercih eden tedarikçilerden yumurta temin etmesi çok acı. Umarım fikrinizi değiştirir ve kafessiz sistemden yumurta tedariği konusunda gerekli taahhütleri verirsiniz.',
    'Merhabalar, sosyal medyada kullandığınız tavuk yumurtalarının kötü koşullarda yetiştirildiğini gördüm ve bu konuda bilgi almak istiyorum, doğru mudur acaba?',
    'Kafes yumurtası eziyettir! Bir an önce bu yanlıştan dönün lütfen.',
    'Merhaba Sayın yetkili,\r\n\r\nOtelinizin kafes yumurtası kullanımıyla ilgili iddiaları mutlaka görmüşsünüzdür. Ben bir müşteriniz olarak bu konuda duyduğum üzüntüyü belirtmek isterim. Umarım bir an önce politikanızı güncellersiniz.',
    'Masum hayvanlara acı çektirmek kabul edilemez. Lütfen binlerce tavuğun sesini duyun.',
    'Sizin gibi saygın bir şirkete bu hayvan eziyeti olaylarını hiç yakıştıramadım. Gerekenin bir an önce yapılması dileğiyle, iyi günler',
    'Bunca otel kafes yumurtası kullanmayı bırakmışken sizin de bırakmanız çok mu zor anlamıyorum. Küçücük bir maliyet farkı bu masumların canından daha değerli olmamalı bana göre.',
    'Taze ve kaliteli ürünleri müşterilerinize sunduğunuzu iddia ediyorsunuz, sonra bu rezalet yöntemle elde edilmiş yumurtaları kullanmayı bile bırakamıyorsunuz öyle mi? Müşterileriniz bundan sonra size nasıl güvenecek?',
    'İnternette denk geldiğim görüntüler çok rahatsız edici. Bütün bunların lüks otellerin arka planında yaşanıyor olması daha da rahatsız edici. Bu eziyete ortak olmaya değmez.',
    'Gerçekten 2022 yılında böyle bir zulmün görmezden gelineceğini mi düşünüyorsunuz? Hayvan haklarının artık ne kadar önemsenen bir konu olduğu ortada, bu eziyete sessiz kalınmaz.',
    'Kaliteli hizmet için kaliteli yiyecek talep ediyorum. Kafes yumurtasına hayır!',
    'Müşterileriniz bundan daha iyisine layık. Artık acı çeken hayvan görüntüleriyle karşılaşmak istemiyoruz.',
    'Ben o tavukların yaşadıklarını hayal bile edemezken siz nasıl hala bunu destekliyorsunuz anlamıyorum.',
    'Başka alternatif yöntemler varken eziyet sisteminde ısrarcı olmak kabul edilemez umarım gerekeni yaparsınız',
    'Tavukların bu şekilde yetiştirildiğine inanmak istemiyorum artık insanoğlu olarak bu sistemi değiştirmeliyiz lütfen siz de bu konuda payınıza düşeni yapın.',
    'Sayın ilgili,\r\n\r\nKafes yumurtasının arkasındaki gerçekleri gördüm. Sizin bu düzeni değiştirme gücünüz var. Ne olur bir adım atın.',
    'Sayın yetkili, size sormak isterim, sizi kafese koysalar orada yaşamak zorunda kalsanız buna dayanabilir miydiniz? Biraz empati kurun çağrılara kulak verin lütfen.',
    'Sayın İlgili,\r\n\r\nSize kafes yumurtası kullanımına son vermenizi rica etmek için ulaşıyorum. Eminim ki misafirlerin görüşleri sizin için değerlidir ve gelen taleplere kulak vereceksinizdir. Teşekkür ederim.',
    'İyi günler,\r\n\r\nOtelinizde servis edilen yumurtalar ile ilgili bilgi alabilir miyim acaba? Gerçekten kafeslerden mi elde ediliyorlar? Cevabınız için teşekkür ederim.',
    'Neden kafes yumurtasını bırakmamakta ısrar ediyorsunuz ki? Maliyet artışı mı derdiniz? Gerçekten buna değer mi?',
    'Barkodu 3 ile başlayan yumurtalar eziyet içeriyor. Şirketlerin bu konuda özen göstermesi çok önemli. İnsanlar artık eziyete ortak olmak istemiyor.',
    'Oteller ile ilgili duyduklarımın beni hayal kırıklığına uğrattığını belirtmek isterim. Şirketler biraz daha az kar etseler ama hayvanlar bunca acıyı çekmese daha iyi değil mi? Kafes yumurtasına hayır.',
    'Şirketinizin hayvan refahı ile ilgili politikasını güncellemesi gerekiyor, müşteriler bu rezalete sessiz kalmayacaktır.',
    'Yetkililer bunca tavuğun çektiği acıya karşı hiçbir şey yapamıyor mu?',
    'Sosyal medyadan öğrendiğime göre otelinizde tavukların acı çektiği ve çok kötü şartlarda yaşadığı kafes sistemiyle üretilen yumurtalar kullanılıyormuş. Ben bu eziyete ortak olmak istemiyorum. Hiçbir misafirinizin de, hatta sizin de de bu eziyete ortak olmak istemeyeceğini düşünüyorum. Bu yüzden en kısa zamanda kafes sistemiyle üretilen yumurtaları kullanmayı terk edeceğiniz haberini bekliyorum sizden.',
    'Sektördeki birçok zincir kafessiz sistem terk taahhüdü verdi fakat siz vermediiz. Bu değişikliği yapmanın size büyük bir ekonomik zararı olmayacak ama tavukların hayatına olan etkisi çok hayati olacak. Ayrıca kafessiz sisteme geçmeyerek marka değerinizi müşterilerinizin gözünde düşürerek kendinize daha çok  zarar veriyorsunuz. Sizi daha duyarlı olmaya ve kafessiz sistem taahhüdü vermeye çağırıyorum.',
    'Kullandığınız yumurtaların arka planında tavukların çektiği acı ve eziyetin olması kabul edilemez. Sizden kafessiz sisteme geçme taahhüdü talep ediyorum. Hem sizin sektörünüzden hem de farklı sektörlerden başka firmalar bu geçişi sağladılar. Siz de bunu rahatlıkla yapabilirsiniz. Kafessiz sistem taahhüdü verip vermemeniz tüketici olarak firma tercihimde etkili olacak.',
    'Kafes sistemi milyonlarca tavuğun çok kötü şartlarda yaşayarak büyük acılar çekmesine yol açıyor. Siz de kafes sistemi yumurtalarını kullanarak bu acıya ortak oluyorsunuz maalesef. Kafessiz sisteme geçerek bu ortaklığa son verin lütfen.',
    'Sizden kafes eziyetine ortak olmanızı beklemezdim. Umarım en kısa sürede kafessiz sisteme geçiş taahhüdü verirsiniz. Aksi takdirde ben dahil birçok müşterinizi kaybedeceksiniz.',
    'Tüketiciler olarak bizim için sadece ürünlerinizin kalitesi gibi faktörler önemli değil. Bizim için artık verdiğiniz yemeklerin arka planındaki süreçlerin etik olup olmaması da önemli. Kafes sistemi yüzünden masum binlerce hatta milyonlarca tavuğun acı çekmesiyle elde edilen yumurtalar kullanmanızı doğru bulmuyorum.',
    'Kafes sisteminde tavuklar çok kötü koşullarda, doğalarına aykırı ortamlarda yaşıyorlar. Kafes sistemine ait çok rahatsız edici fotoğraflar gördüm. Sizin gibi bir firmanın da bu eziyete ortak olmak istemeyeceğini umuyorum. Daha fazla vakit kaybetmeden kafessiz sisteme geçmeniz gerekiyor!',
    'Markanızın ismini duyunca akıllara tatil değil de kafes sisteminde acı içerisinde yaşayan, perişan haldeki tavukların gelmesini istemiyorsanız bir an önce kafessiz sisteme geçmelisiniz!',
    'Kafes yumurtası kullanarak bu eziyetin, yanlışın ortağı oluyorsunuz. Lütfen bu yanlıştan bir an önce dönün ve kafessiz sisteme geçin.',
    'Kafes sistemiyle elde edilen yumurtaları kullanmaya devam ederek, sadece tavuklara değil kendinize de zarar veriyorsunuz. Tüketicilerin gözündeki saygınlığınızı zedeliyorsunuz. Doğru olanı yapın ve kafessiz sisteme geçin!',
    'Kafes yumurtası kullanarak markanıza olan güvenimizi sarsıyorsunuz. Müşterinin güvenini tekrar kazanmak istiyorsanız kafessiz sisteme geçeceğinizin sözünü vermelisiniz.',
    'Kafes sistemi tavuklara cehennemi yaşatıyor. Tavuklar en temel ihtiyaçlarından mahrum bir şekilde, zehirli gazları soluyarak, A4 kağıdı kadar alanda tüm hayatlarını geçirmek zorunda kalıyorlar. Bu eziyete ortak olmayın, artık kafessiz sisteme geçin.',
    'Kafes sistemine karşıyım. Olabildiğince kafes yumurtası kullanan firmalardan kaçınıyorum.',
    'Kafes sistemini terk edip kafessiz sisteme geçmek hem binlerce tavuğun refahını arttıracak hem de müşterilerinizi memnun edecek. Üstelik kafessiz sisteme geçiş sözü vermeyi erteleyerek saygınlığınızı yitiriyorsunuz.',
    'İnternetten kafes sisteminin gerçeklerini okudum, kafes sistemindeki tavukların içler acısı fotoğraflarını gördüm. Artık bu konuda duyarlıyım ve kafes yumurtası kullanmak istemiyorum. Otelinizi de kafes yumurtası kullandığı sürece tercih etmeyecek ve çevremi bilinçlendireceğim.',
    'Müşteri taleplerini görmezden gelemezsiniz. İnsanlar artık kafes yumurtası yemek istemiyorlar. Siz de artık bu talebe uyarak ve elinizi vicdanınıza koyarak kafes yumurtası kullanmaya son vermelisiniz.',
    'Kafes sistemini terk etmelisiniz. Yoksa dünya standartlarının ve sektörün gerisinde kalmış olacaksınız. Müşterilerinizi kaybedeceksiniz.',
    '2022 yılında halen daha kafes yumurtası kullanmanıza inanamıyorum. Artık olması gerekeni, size yakışanı yapın ve kafessiz sisteme geçin.',
    'Kafes sistemi tavukların her anını işkence haline getiriyor. Lütfen biraz empati kurun, kendinizi o tavukların yerine koyun. Hayal etmesi bile dayanılmazken tavuklar bunu gerçekten yaşıyorlar. Buna göz yummayın. Kafessiz sisteme geçin.',
    'Ben, çevrem, ailem ve arkadaşlarım kod uygulaması başladığından beri kafes sistemiyle elde edilen 3 kod numaralı yumurtaları satın almıyoruz asla. Ama sadece bizim satın almamamız yeterli değil. Dışarıda yediğimiz yumurtaların kaynağı da önemli bizim için. Bu yüzden sizi 3 kodlu yumurtaları kullanmayı bırakmaya çağırıyorum.',
    'Kafes yumurtaları çok kötü koşullarda üretiliyor. Bu koşullar hem tavukların hayatını mahvediyor hem de insan sağlığı açısından da sakıncalı. Kaliteli ürünler kullandığınızı iddia ediyorsunuz ama kafes yumurtası kullanıyorsunuz. Lütfen kafes yumurtasını bırakın ve kafessiz sisteme geçiş sözü verin.',
    'Otellerinizi beğeniyordum ancak gördüğüm kampanyadan sonra hakkınızdaki fikirlerim değişti. Kafes yumurtası kullanarak bu eziyete ortak olmanızı beklemezdim. Sizin gibi bir firmanın buna dikkat etmemesi çok yazık. Umarım bu yanlışınızdan dönersiniz ve kafessiz sisteme geçiş sağlarsınız.',
    'Küçücük bir maliyet farkı uğruna tavuklar binlerce tavuk cehennemi yaşıyor. Artık bu eziyete ortak olmayın, kafessiz sisteme geçiş sözü verin. Sizden bir açıklama bekliyorum.',
    'Sizin gibi bir firmanın hayvan haklarına ve tüketici taleplerine bu kadar duyarsız olması inanılır gibi değil. Üstelik kafessiz sisteme geçmek sizin zor değilken. Azıcık bir maliyet farkı için mi halen daha kafessiz sisteme geçmiyorsunuz, tavuklar acı çekiyor?',
    'Hayvanlara bu yapılan haksızlık. Siz bunun bir parçası olmayın. Kafes sistemi çok acımasız.',
    'Kampanyayı gördüm çok üzüldüm. Hayvanların yeri kafes değil doğadır onlara en azından biraz özgürlüğü çok görmeyin. Tavukların kafeslerden çıkması için bir şeyler yapabilirsiniz.',
    'Tavukları kafesten kurtarma şansınız varken neden bu şansı kullanmıyorsunuz anlamıyorum bir sürü marka bunu yapmış.',
    'Siz de eziyete karşı duran şirketlere katılın kafes eziyetine dur deyin',
    'Hayatları boyunca gün ışığı görmemişler sizi de üzmüyor mu bu? Kafes zulmünün parçası olmayın.',
    'Bu tavukların hali hal değil. Onları kafeslerden kurtarmamız gerekiyor. Sizin de bu konuda duyarlı olacağınızı umuyorum.',
    'Ben ve etrafımdakiler hayvanlara bu derece eziyet edilmesine karşı duruyoruz siz kafes yumurtasını bırakacağız demedikçe sizin de karşınızdayız',
    'Sayın Yetkililer,\r\n\r\nSizin gibi otellere çağrıda bulunan bir imza kampanyası dolaşıyor. Gerekeni yapmanızı ve hayvanlara yapılana açıkça karşı durmanızı, işletmelerinize kafeslerden gelen yumurtaları sokmamanızı rica ediyoruz. Dikkate aldığınız için teşekkür ederiz.',
    'İlgililere sesleniyorum, Kafes yumurtası doğallıktan uzak, ne bizim ne hayvanlar için sağlıklı bir ürün. Kalite seviyesini koruyup bu üründen acilen vazgeçin.',
    'Markanıza kafes yumurtası ile ilgili iddiaları yakıştıramıyorum',
    'Kafeslerle ilgili gerçekleri öğrendiğimden beri evime 3 numaralı yumurta sokmuyorum siz de mutfağınıza sokmasanız keşke.',
    'Hayvana zulme hayır kafes yumurtasına hayır',
    'Kafes yumurtasını terk etme sözü veren oteller arasında sizi de görmek istiyoruz bu akım gittikçe büyüyor.',
    'Artık kafes yumurtasını hiç tüketesim gelmiyor siz de misafirinize yedirmeseniz keşke',
    'Kafes yumurtası tek seçenek mi sanki? siz almaya devam ederseniz bu yumurtalar da üretilmeye devam edecek değişim sizlerle başlar.',
    'Eğer artık kafeste üretilen yumurtalardan almayacağını açıklasanız bu kaç hayvanı kurtarır biliyor musunuz? Şimdiye kadar milyonlarca tavuk şirketlerin sağlam duruşu sayesinde kafeslerden çıktı. Siz de bu farkı yaratın!',
    'Bu şirketler karı her şeyin önüne koymayı artık bırakmalı. Hayvanlara zulmetmeden yemek sunmaya başlamanın maliyeti ne kadar olabilir ki? Neden bir açıklama yapmaya çekiniyorsunuz?',
    'Umarım bir an önce kafes yumurtasını bırakma taahhüdünü verirsiniz ve zulme karşı durursunuz.',
    'Binlerce destekçi kafessiz yumurta taahhüdü vermenizi bekliyoruz.',
    'Markanızdan taahhüt gelene kadar otellerinize uğramayacağız.',
    'Tavuklar kafeslerde büyük acılar çekiyor onların acısına acı katmayın bir an önce kafes yumurtasını bırakma yoluna girin.',
    'Masum canlıların sizden duyarlılığa ihtiyacı var lütfen seslerini duyun kafes yumurtasından vazgeçin',
    'Yumurta yetiştiriciliğinin arkasında çok korkunç gerçekler varmış zaten böyle uygulamalar olduğunu biliyoruz ama bari kafes seviyesinde bir eziyet yaşanmasın artık siz de buna dur deyin',
    'Kafeslerde üretilmiş yumurtaları yemeyi reddediyorum siz de kullanmayı reddedin',
    'Hayvanların çektiği eziyeti gördüğümden beri kafes yöntemiyle üretilmiş yumurtalara bakasım bile gelmiyor siz de bir an önce kullanmayı bırakın lütfen',
    'Kafes eziyetine dur deyin doğru yolu seçin',
    'Sayın yetkililer,\r\nKafessiz yumurta kampanyası destekçileri olarak sizden kafes yumurtası kullanımıyla ilgili bir açıklama bekliyoruz. Bu eziyet sistemine dur dediğinizi görmek içimizi rahatlatacaktır. İlginiz için teşekkür ederiz.',
    'Sayın ilgili,\r\n\r\nİnternette kafes yumurtasına karşı büyüyen bir hareket var. Siz de tarihin doğru tarafında olun ve bir an önce kafes yumurtasını bırakma taahhüdü verin. Bu markanın adı bu şekilde anılmamalı. Teşekkürler.',
    'Neden bu ısrarınız? Hayvana eziyete dur demek bu kadar zor olmamalı sizler için.',
    'Çok fazla markanın yayınlayabildiği bu kafessiz yumurta taahhüdünü siz de yayınlayabilirsiniz bizim de size marka olarak saygımız artar.',
    'Kafessiz Türkiye’nin uzun süredir takipçisiyim. Taahhüt vermeyen firmalar arasında sizin adınızı görünce çok üzüldüm. Umarım kısa süre içinde siz de taahhüt veren oteller arasına katılırsınız.',
    'Bu otelin adını da artık taahhüt listesinde görmek istiyoruz, kafes yumurtasını bırakmak zor değil!',
    '10dan fazla otel kafes yumurtasına karşı taahhüt yayınladı siz de yapabilirsiniz',
    'Sayın yetkililer,\r\nİnternette kafes yumurtası kullanımıyla ilgili açıklama yapmayı reddettiğinizi gördüm. Eğer siz de kafes yumurtasını bırakma sözü verirseniz müşterilerinizi çok memnun edersiniz. Talebimizi dikkate almanız dileğiyle.',
    'Sayın yetkili,\r\n\r\nSizi hayvana eziyet konusunda duyarlılığa davet ediyoruz. Lütfen siz de kafes yumurtası işkencesine karşı durun.',
    'Kafes eziyetine karşıyız, sizi de aramıza bekliyoruz',
    'İyi günler,\r\nKafes yumurtasını bırakmanız üzere sizinle iletişime geçilmesine rağmen adım atmadığınız doğru mu acaba?',
    'Bu kadar büyük bir otelin hayvana eziyete karşı duranlarda başı çekmesi gerekiyordu. Siz ise kafes yumurtasına karşı bile ses çıkarmadınız.',
    'Merhaba, birçok otelin kolayca kafessiz yumurtaya geçtiğini duydum. Sizin bu konudaki niyetinizi öğrenmek istiyorum.',
    'Kafessiz yumurta kullanımıyla ilgili son zamanlarda birçok şey duydum. Siz de bu kampanya konusunda bir adım atarsanız çok mutlu olurum.',
    'Kafes yumurtasını bırakmakla ilgili süregelen bir çalışmanız var mı? Duymayı çok isterim.',
    'Son zamanlarda çok fazla firma kafes yumurtasını bırakacağını açıkladı aynı adımı sizden de bekliyoruz.',
    'Merhaba, kafessiz yumurta kullanımıyla ilgili kampanyalar önüme düşüyor. Kafessize geçen markaları da yakından takip ediyorum. Siz bu konuda ne yapmayı düşünüyorsunuz?',
    'Daha sürdürülebilir yumurta kullanımına yönelik hamlelerinizi bekliyoruz',
    'Markanızdan hayvan refahıyla ilgili duyarlılık bekliyoruz kafes yumurtası endüstrideki en acı verici yöntemlerden biri',
    'Kafes eziyetine daha fazla destek olmayın lütfen kafeslere karşı bir açıklama yayınlayın siz de',
    'Sayın yetkililer, hayvanlar için hassasiyet gösterdiğinizi görmek istiyoruz yapabileceğiniz en basit şey kafes yumurtasını bırakıyoruz demek',
    'Merhabalar tavuklar için asgari şartları sağlamak için kafes karşıtı taahhüt verecek misiniz acaba?',
    'Neden kafes yumurtasını bırakmanız üzere gelen bunca talebe karşılık hala susuyorsunuz?',
    'Sayın yetkililer,\r\n\r\nHayvan eziyetinin yanlış olduğunu siz de biliyorsunuz. Kafeslere karşı durmanız gerekli. Bu muamele vicdana sığmaz.',
    'O kadar kaliteden, sağlıktan, temiz gıdadan bahsediyorsunuz ama sonra kafes yumurtası gibi bir rezalete karşı bir politika bile geliştirmiyorsunuz.',
    'Tatil karnesi çalışmasına karşı tepkiniz ne olacak merakla bekliyoruz umarım kafes yumurtasını bırakma sözü verirsiniz.',
    'Tavuklara eziyet edilmesine ses çıkarmazsanız bu oteller benim için bitmiştir.',
    'Kafese dur demek için hala geç değil binlerce hayvana umut olabilirsiniz',
    'Hayvan eziyetine ortak olmayın kafes yumurtasını bırakacağınızı açıklayın',
    'Ülkemizde hayvan hakları üzerine bilinç gittikçe yaygınlaşıyor bu kafes yumurtası eziyetini de ileride utançla anacağız siz de bu yoldan dönmelisiniz en yakın zamanda',
    'Kafes tavukları kanatlarını bile açamadan havadan zehirlenerek yaşıyorlar insanın yüreği bunu nasıl kaldırır böyle bir eziyete ortak olmayın',
    'Hayvanların günahına girmeyin onları kurtarabilecekken susanlardan olmayın kafes yumurtasına hayır diyoruz!',
    'Müşterilerden binlerce lira alıyorsunuz ama düzgün yumurta yedirmenin masrafına giremiyorsunuz kafes yumurtası veriyorsunuz yazıklar olsun',
    'Misafirleriniz lüks odalarda konaklıyor peki ya yumurtasını aldığınız tavuklar? Onlara nasıl bir hapis hayatı yaşatıldığından haberiniz var mı?'
    ]
    const body = bodies[Math.floor(Math.random() * bodies.length)]

    let mail = `mailto:${receiver}?bcc=aksiyon@kafessizturkiye.com&subject=${subject}&body=${body}`
    mail = mail.replace('ı','%C4%B1')
    mail = mail.replace('ö','%C3%B6')
    mail = mail.replace('ü','%C3%BC')
    mail = mail.replace('ş','%C5%9F')
    mail = mail.replace('ç','%C3%A7')
    mail = mail.replace('ğ','%C4%9F')
    mail = mail.replace(' ','%20')
    mail = mail.replace('\r\n','%0D%0A')

    res.redirect(mail)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 

////\r\n
