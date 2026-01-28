import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import YouTubeFacade from '../../components/YouTubeFacade';
import SEO from '../../components/SEO';
import { shareOnTwitter, shareOnFacebook, shareOnLinkedIn } from '../../utils/shareHelper';
import { copyToClipboard } from '../../utils/clipboardHelper';
import './MoreCategory.css';

const BlogDetail = () => {
    const { id } = useParams();

    const blogPosts = [
        {
            id: 1,
            category: 'Aşırı Gerilim Koruma',
            image: '/blog-images/Panelboards.png',
            title: 'Kuruluşunuzun Neden Aşırı Gerilim Korumasına İhtiyacı Var?',
            excerpt: ' ',
            date: '24 Mart 2021',
            author: 'bricar77',
            content: `
            <h2>Kuruluşunuzun Neden Aşırı Gerilim Korumasına İhtiyacı Var?</h2>
                <p>Elektronik cihazlar, günümüz dünyasında her işletme veya kuruluş için olmazsa olmazdır. Ödemelerin işlenmesi, iletişim ve kayıt tutma gibi işletmenin işleyişini sağlayan temel işlevleri yerine getirmede önemli bir rol oynarlar. Birçok kuruluşun sıklıkla fark edemediği şey, bu elektronik ekipmanların doğru şekilde korunmasının, yerine getirdikleri işlevler kadar önemli olduğudur.</p>
                <figure class="article-image">
                    <img src="/blog-images/Panelboards.png"/>
                </figure>
                <h2>Elektrik dalgalanmalarının tehdidi</h2>
                <p>Elektrik dalgalanmaları, kısa süreli ancak şiddeti değişen ani elektrik akımlarıdır. Dalgalanma ne kadar güçlü olursa, o kadar fazla hasara yol açabilir. Bu, daha küçük, fark edilmeyen dalgalanmaların tehdidini küçümsemek anlamına gelmez; çünkü bunların sık görülen etkileri zamanla yavaş yavaş biriken hasar verici bir etkiye neden olabilir. Bu daha zayıf ancak daha yaygın dalgalanmalar, elektronik cihazların güvenilirliğinin azalmasına ve kullanım ömrünün kısalmasına yol açabilir.</p>
                <p>Tipik elektrik dalgalanması nedenleri:</p>
                <ul>
                    <li>Arızalı kablolama</li>
                    <li>Elektrik şebekesindeki arızalar</li>
                    <li>Elektrik aşırı yüklenmesi (tek bir devreden çok fazla güç çekilmesi)</li>
                    <li>Devrilmiş elektrik hatları</li>
                    <li>Elektrik Kesintisi</li>
                    <li>Yıldırım çarpması</li>
                </ul>
                <p>Elektrik dalgalanmalarının neden olduğu hasar, büyüklüğünden bağımsız olarak, her kuruluş için zararlıdır. Bir işletme hizmetlerini sunmak için elektronik ekipmanına güveniyorsa, bu cihazlardaki hasar, iş aksamalarına ve kar kaybına yol açabilir. Donanım arızalarının,  işletme aksamalarının en yaygın nedeni olduğu söylenmektedir .</p>
                <p>Elektronik sistem arızalarının sonuçlarının ciddiyeti, güvenlik ve can güvenliği sistemleri söz konusu olduğunda önemli ölçüde artmaktadır. Bu tür senaryolarda, yalnızca bireyin güvenliği değil, kuruluşun varlıkları da büyük bir risk altındadır. Ayrıca, para cezaları veya yasal yükümlülükler nedeniyle potansiyel mali sonuçlar açısından da artan bir risk söz konusudur.</p>
                <h2>Aşırı gerilim koruma cihazları nasıl yardımcı olur?</h2>
                <p>Aşırı gerilim koruma cihazları (SPD'ler), bir güç dalgalanması durumunda aşırı voltaj ve akımın büyük bir kısmını ortadan kaldırarak elektronik ekipmanları korur. SPD'ler, elektrikli cihazları hasardan korumak ve sonuç olarak kullanım ömrünü uzatmak için etkili bir önlemdir. SPD'lerin diğer bazı faydaları şunlardır:</p>
                <ul>
                    <li>Maliyet etkinliği yüksek. Aşırı gerilim  koruma cihazları (SPD'ler) uygun fiyatlı ve kurulumu kolaydır.</li>
                    <li>Daha az sıklıkta bakım. Aşırı gerilim koruma cihazları  (SPD'ler), elektronik donanım ve ısıtma-soğutma sistemleri gibi sistemleri etkili bir şekilde koruyarak, sürekli bakım ihtiyacını azaltır.</li>
                    <li>Tamiri Kolay.  SPD'ler gerektiğinde kolayca tamir edilebilir veya değiştirilebilir.</li>
                    <li>Çalışma göstergeleri veya alarmlar.  Çalışma veya arıza durumunu gösteren yeşil veya kırmızı LED'ler veya güç kaybını veya arızalı bir aşırı gerilim koruma cihazını (SPD) gösteren alarm modülleri.</li>
                </ul>
                <h2>Sonuç olarak</h2>
                <p>Aşırı gerilim koruma cihazları, işletmenizin faaliyet kesintisi riskini azaltarak, elektronik sistemleri koruyarak ve can güvenliğini sağlayarak kuruluşunuza yardımcı olur. Akıllı aşırı gerilim koruma cihazları, elektronik cihazlarınızı güvende tutmanın yanı sıra, işlevleri tehlikeye girdiğinde sizi anında bilgilendirir; bu da güvenilir bir güvenlik sistemi sunar.</p>
                <p>Aşırı gerilim koruma cihazlarının önemi nedeniyle,  Enerji Kontrol Sistemleri,  her türlü kurumsal yapıya uyacak şekilde tasarlanmış, deneyimli üreticilerden geniş bir yelpazede yüksek kaliteli cihazlar sunmaktadır. Bu cihazlar,  aşırı gerilim bastırma  ve  yıldırım çarpmalarına karşı özel koruma için güvenilir çözümler sunmaktadır .</p>
                `
        },
        {
            id: 2,
            category: 'Aşırı Gerilim Koruması',
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200',
            title: 'Geçici dalgalanmalar kârınızı azaltır.',
            excerpt: 'Kablo uzunluğu ve montaj uygulamaları, özellikle kademeli mimarilerde, aşırı gerilim koruma performansının görünmez kahramanları (veya sessiz sabotajcıları)dır. En gelişmiş frekans azaltıcı aşırı gerilim koruyucularının bile performansı, montaj hassas bir şekilde yapılmazsa ciddi şekilde tehlikeye girebilir. Makalenin tamamı için… ayrıntılı teknik analizimize göz atın!',
            date: '17 Mart 2021',
            author: 'bricar77',
            content: `
                <h2>Geçici dalgalanmalar kârınızı azaltır.</h2>
                <figure class="article-image">
                    <img src="/blog-images/Transient-Surges.png" loading="lazy"/>
                </figure>
                <p>Geçici voltaj yükselmeleri, yalnızca birkaç mikrosaniye süren ve genellikle göz ardı edilen veya zararsız kabul edilen kısa süreli aşırı voltaj artışlarını ifade eder. Bununla birlikte, bu voltaj yükselmeleri elektronik cihazlarınız için son derece zararlı olabilir ve uzun vadeli kârınızı azaltabilir. Bu yükselmelerin nedenlerinden bazıları elektrik şebekesi anahtarlaması, yıldırım çarpması veya arızalı bir transformatör veya iletim hattıdır. Bu yükselmeler aşırı yüklenmeye veya kısa devreye neden olabilir ve zamanla cihazlarınızın performansını düşürebilir.</p>
            
                <p>International Business Times'ın  belirttiğine göre, ABD diğer gelişmiş ülkelerden daha sık elektrik kesintisi yaşıyor.  Federal veriler , elektrik kesintilerinin Amerikan işletmelerine yılda 150 milyar dolara kadar mal olduğunu gösteriyor. Elektrik dalgalanmaları , ekipmanlarda  arızaya ve ciddi iş aksamasına neden olarak işletmenizi riske attığı için gelir kaybına yol açabilir.</p>
                <p>Birçok kuruluş, yalnızca bir saatlik kesintinin 100.000 dolardan fazla maliyete yol açabileceğini ve uzun vadeli karlarını azaltabileceğini iddia ediyor. ITC  araştırması  ayrıca, 60 dakikalık bir kesintinin işletmeye 300.000 dolardan fazla maliyete neden olabileceğini belirterek, şirketlerin verimli altyapıya büyük ölçüde bağımlı olduğunu kanıtlıyor. Çoğu zaman, hasarlar onarılamaz ve çalışma kapasitenizi ciddi şekilde etkileyebilir. Geçici güç dalgalanmaları ayrıca şirketlerin kayıplarla başa çıkamamasına ve tamamen kapanmasına yol açabilir.</p>
                <h2>İtibarın Zedelenmesi</h2>
                <p>Müşterilerinizin ve iş ortaklarınızın güvenini kaybettikten sonra, onları geri kazanmak sadece maliyetli olmakla kalmaz, aynı zamanda piyasadaki güvenilirliğinizi de etkiler. Ürün ve hizmetlerinizi müşterilerinize, iş ortaklarınıza ve tedarikçilerinize zamanında teslim edemediğinizde, üretim duraksaması sizi dezavantajlı duruma düşürebilir.</p>
                <p>İtibarınızın zedelenmesi, müşterilerin şirketiniz hakkındaki algısını değiştirdiği için satışlarınızı ve gelirlerinizi ciddi şekilde etkileyebilir. Bu durum, ürününüze olan talebin düşmesiyle birlikte elden çıkarılamayan stoklarınızın artmasına da yol açabilir. Piyasa verileri, birkaç dakikalık bir kesintinin bile şirket içi operasyonların durmasına neden olabileceğini göstermektedir.</p>
                <h2>Çözümler</h2>
                <p>İşletmenizi korurken verimliliğinizi de sürdürmek için voltaj dalgalanmalarından kaynaklanan hasarı azaltmak amacıyla aşırı gerilim koruyucu kullanarak proaktif önlemler almanızı öneririz. ECS, elektrik kesintisi veya kararma durumunda bilgisayarlarınızın ve veri ekipmanlarınızın korunmasını sağlayacaktır.</p>
                <p>Ayrıca, maliyet tasarrufu sağlamak ve uzun vadeli kârınızı artırmak için bir enerji kontrol planı uygulamanıza yardımcı olacağız. Geçmişte, West Fraser Sawmills ve Muhimbili Ulusal Hastanesi gibi birçok şirketin arıza sürelerini başarıyla azaltmasına yardımcı olduk.</p>
                `
        },
        {
            id: 3,
            category: 'Harmonik',
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200',
            title: 'Yanlış Sıfır Geçişleri Nedir?',
            excerpt: '2030 ve 2050 hedefleri doğrultusunda Türkiye\'nin enerji dönüşüm yol haritası. Güneş, rüzgar ve hidrojen enerjisi yatırımları hakkında güncel gelişmeler...',
            date: '5 Ocak 2026',
            author: 'Jeff Edwards',
            content: `
                <h2>Yanlış Sıfır Geçişleri Nedir?</h2>
                <p>Yanlış sıfır geçişleri, kontrolörün bir sıfır geçiş olayı algıladığını düşündüğü, ancak aslında gerçek bir sıfır geçişine değil, geçici veya harmonik bozulmaya tepki verdiği durumlardır.</p>
                <p>Kelepçeleme ile frekans zayıflama dalgalanma bastırma arasındaki farkları göz önünde bulundurduğumuzda, yanlış sıfır geçişleri, temel dalgalanma bastırmanın çarpıcı bir şekilde başarısız olduğu ve yüksek performanslı dalga formu izlemenin değerini kanıtladığı mükemmel bir örnek haline gelir. Makalenin tamamını okumak için tıklayın!</p>
            `
        },
        {
            id: 4,
            category: 'Harmonik',
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200',
            title: 'Harmonikleriniz Var mı?',
            excerpt: 'Harmonikleriniz Var mı? Daha fazla Teknoloji Konusu için buraya tıklayın!',
            date: '2 Ocak 2026',
            author: 'bricar77',
            youtubeId: 'TdKHF4Qilrw',
            content: `
                <h2>Harmonikleriniz var mı?</h2>
                <p>Ama Gerçekten Öyle mi?</p>
                <div class="youtube-placeholder"></div>
                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer loading="lazy" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        },

        {
            id: 5,
            category: 'Verimlilik',
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200',
            title: 'Verimliliğinizi En Üst Düzeye Çıkarın!',
            excerpt: 'Elektrik voltajındaki ani yükselmeler günlük çalışma faaliyetleriniz için can sıkıcı olabilir. ABD Enerji Bilgi Birliği\'ne(EIA) göre, 2018 yılında müşteriler ortalama altı saatlik elektrik kesintileri yaşadı.Elektrik voltajındaki ani yükselmeler, elektrikli ekipman ve sistemlerinizin hassas altyapısını etkileyebilir ve onları tamamen veya kısmen kullanılamaz hale getirebilir.NEMA tarafından yapılan bir ankete göre, yaklaşık % 41\'i',
            date: '10 Mart 2021',
            author: 'bricar77',
            content: `
                <h2>Verimliliğinizi En Üst Düzeye Çıkarın!</h2>
                <p>Elektrik voltajındaki ani yükselmeler, günlük çalışma faaliyetleriniz için büyük bir sorun olabilir. ABD Enerji Bilgi Birliği'ne (EIA) göre, 2018 yılında müşteriler ortalama altı saatlik elektrik kesintileri yaşamıştır. Elektrik voltajındaki ani yükselmeler, elektrikli ekipman ve sistemlerinizin hassas altyapısını etkileyebilir ve onları tamamen veya kısmen kullanılamaz hale getirebilir.  NEMA tarafından yapılan bir ankete  göre, elektrik voltajındaki ani yükselmeleri yaşayan kişilerin yaklaşık %41'i elektrikli ekipmanlarında kayıp veya arıza bildirmiştir. Bu nedenle, elektrik voltajındaki ani yükselmelerin faaliyetleriniz için yıkıcı olabileceği açıktır.</p>
                <p>Peki bu konuda ne yapabiliriz? Cevap, aşırı gerilim koruma cihazları takmakta yatıyor.</p>
                <h2>Aşırı Gerilim Koruma Cihazları Nelerdir?</h2>
                <p>Aşırı gerilim koruma cihazları, elektrik sistemlerinin kablolarını, aksesuarlarını ve diğer elektrik tesisatlarını geçici gerilimlerden koruyan bileşenleridir. Bu cihazlar ayrıca bilgisayarlar, otomatik üretim sistemleri, asansörler ve tıbbi ekipmanlar gibi hassas elektronik ekipmanlara da bağlanabilir.</p>
                <h2>Çözüm</h2>
                <p>Geçici voltaj dalgalanmaları, elektrik sistemlerine ve cihazlarına ciddi zararlar verebilir ve bakım ve onarım nedeniyle kayıplara yol açabilir. Aşırı gerilim koruma cihazları, aşırı gerilimlerin zararlı etkilerini ortadan kaldırmada ve ekipman arızası olasılığını azaltmada hayati bir rol oynar. Bu nedenle, değerli eşyalarınızı korumak ve kararsız voltaj endişesinden kurtulmak için kaliteli aşırı gerilim koruma cihazlarının takılması önerilir.</p>
            `
        },
        {
            id: 6,
            category: 'Kategorilenmemiş',
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200',
            title: 'Bir tane yeterli mi?',
            excerpt: 'Ana panelde sadece bir SPD ye ihtiyacım var... Değil mi? İzleyin ve görün...',
            date: '9 Ağustos 2022',
            author: 'bricar77',
            youtubeId: 'iYQbjIG29xg',
            content: `
                <h2>Bir tane yeterli mi?</h2>
                <p>Ana panelde sadece bir SPD'ye ihtiyacım var... değil mi? İzleyin ve görün...</p>
                <div class="youtube-placeholder"></div>
                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer loading="lazy" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        },
        {
            id: 7,
            category: 'Asansör',
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200',
            title: 'Asansörlerin aşırı gerilim korumasına ihtiyacı var mı?',
            excerpt: 'Genel kanı evet, gerekli! Can güvenliği ve hizmet sürekliliği sizin için önemliyse, bu Teknik Konuya göz atın! Daha fazla Teknik Konu için bizi ziyaret edin... Veya bugün bizimle iletişime geçin!',
            date: '16 Mayıs 2022',
            author: 'bricar77',
            youtubeId: 'nmcNuGU4j6E',
            content: `
                <h2>Asansörlerin aşırı gerilim korumasına ihtiyacı var mı?</h2>
                <p>Genel kanı evet, haklılar! Can güvenliği ve hizmet sürekliliği önemliyse, bu Teknoloji Konusuna göz atın!</p>
                <div class="youtube-placeholder"></div>
                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer loading="lazy" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        },
        {
            id: 8,
            category: 'SPD',
            image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200',
            title: 'SPD lere nerede ihtiyacım var?',
            excerpt: 'En basit cevap şu: Her yerde aşırı gerilim korumasına ihtiyacınız var! Ama daha detaylı bilgi için bu haftaki Teknoloji Konusunu izleyin! Daha fazla Teknoloji Konusu için... Abone olun!',
            date: '9 Mayıs 2022',
            author: 'bricar77',
            youtubeId: 'i80AMgvWhMI',
            content: `
                <h2>SPD'lere nerede ihtiyacım var?</h2>
                <div class="youtube-placeholder"></div>
                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer loading="lazy" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        },
        {
            id: 9,
            category: 'Güç Kalitesi',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200',
            title: 'Güç Kalitesi Önemli mi?',
            excerpt: 'Güç Kalitesi Önemli mi?',
            date: '08 Mart 2021',
            author: 'bricar77',
            content: `
                <h2>Güç Kalitesi Önemli mi?</h2>
                <figure class="article-image">
                    <img src="/blog-images/power.jpg" alt="Güç Kalitesi Önemli mi?">
                </figure>
                <p>Güç kalitesi karmaşık bir konudur. En basit haliyle, elektrik güç kalitesi, bir güç kaynağının voltajı, frekansı ve sinüzoidal dalga biçimini koruyarak belirlenmiş standartlara ne kadar uyduğunu ifade eder. İstikrarlı bir güç kalitesine sahip olmak hayati önem taşır. Yüksek güç kalitesi, voltaj değişimlerinden kaynaklanan elektrikli ekipmanlara verilen zararları azaltmaya yardımcı olur. Burada, iyi bir güç kalitesine sahip olmanın bazı nedenlerini vurgulayacağız.</p>
                <h2>Güç Kalitesi Neden Önemlidir?</h2>
                <p>Güç kalitesi birçok nedenden dolayı önemlidir. Tüm elektrikli ekipmanlar belirli voltaj seviyelerinde çalışacak şekilde tasarlanmıştır. Düşük kaliteli elektrik beslemesi, ekipmanınızın voltaj aralığının dışında kalan güç kesintilerine neden olabilir. Bu çok tehlikeli olabilir çünkü ekipman arızalanabilir veya tamamen bozulabilir ve onarımı veya değiştirilmesi önemli zaman ve para gerektirebilir. Zayıf güç kaynağı, herhangi bir elektronik ekipmanı yavaş yavaş bozarak, elektrikli ekipmanınızın erken yaşlanmasına ve arızalanmasına neden olabilir. Düşük güç kalitesi nedeniyle makine arızası, hastaneler gibi kritik uygulamalarda hayati tehlike oluşturabilir.</p>
                <p>İşletmelerdeki üretim hızı, elektrik tedarikindeki dalgalanmalardan etkilenebilir. Bu da işletmeler için önemli kayıplara yol açabilir. Elektrik Enerjisi Araştırma Enstitüsü'ne göre, düşük elektrik kalitesi,  endüstriye  yıllık olarak 188 milyar dolara kadar doğrudan maliyet ve verimlilik kaybına neden olmaktadır. Kötü elektrik kalitesi ayrıca enerji tüketimini artırarak yüksek enerji faturalarına yol açmaktadır. Bunun temel nedeni, elektrik tedarikçilerinin tarife belirlerken elektrik enerjisi kalitesini dikkate almamalarıdır.</p>
                <p>Bilgisayar dünyasında, güç kalitesi hassas elektrikli ekipmanların düzgün çalışması ve bakımı için çok önemlidir. Sisteminizin arızalanması acı vericidir, ancak tüm verilerinizi kaybetmek korkunçtur. Voltaj seviyelerindeki ani bir artış, ekipmanın arızalanmasına ve veri kaybına yol açabilir. Ayrıca, elektriksel gürültü bilgisayar sinyallerini bozarak iletilen verilerin bozulmasına veya kaybolmasına neden olabilir. Güç kesintileri,  dünya genelinde veri kaybının en önemli nedenlerinden biridir  . Şirketler ve bireyler bu tür aksiliklerden kaçınmak için genellikle sistemlerini CPU hasarına karşı korumak amacıyla yedek güç kaynağı kurarlar.</p>
                <h2>Çözüm</h2>
                <p>İyi bir güç kalitesine sahip olmanın faydaları çoktur. Yüksek güç kalitesine önem vermek, elektrikli alet ve ekipmanlarınızın voltaj dalgalanmaları veya güç düzensizlikleri nedeniyle zarar görmemesini sağlar. Tüketiciler, daha düşük tüketim sayesinde elektrik tarifelerinde tasarruf sağlarlar. Üretim ve veri kayıpları en aza indirilebilir ve şirketin genel performansı iyileştirilebilir. Ekipmanınızın iyi korunmasını sağlamak istiyorsanız, tutarlı ve yüksek kaliteli güç sağlamak için diğer güç kalitesi güvence ekipmanlarıyla birlikte bir yedek güç kaynağı edinmeyi düşünün</p>
            `
        },
        {
            id: 10,
            category: 'SPD',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200',
            title: 'Doğru SPD yi seçmek mi?',
            excerpt: 'Tesisiniz için en iyi veya doğru SPD yi(Ateş Basınçlı Dezenfeksiyon Cihazı) seçmek oldukça kafa karıştırıcı olabilir.Daha fazla bilgi için bu Teknik Konuya göz atın.',
            date: '4 Mart 2022',
            author: 'bricar77',
            youtubeId: 'epTfzDsSnQk',
            content: `
                <h2>Doğru SPD yi seçmek mi?</h2>
                <p>Tesisiniz için en iyi veya doğru SPD'yi (Ateş Basınçlı Dezenfeksiyon Cihazı) seçmek oldukça kafa karıştırıcı olabilir. Daha fazla bilgi için bu Teknik Konuya göz atın.</p>
                <div class="youtube-placeholder"></div>
                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer loading="lazy" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        }
    ];

    const post = blogPosts.find(p => p.id === parseInt(id));

    const relatedPosts = blogPosts
        .filter(p => p.id !== parseInt(id) && p.category === post?.category)
        .slice(0, 3);

    // Share handlers using utility functions
    const getShareUrl = () => window.location.href;
    const [isCopied, setIsCopied] = useState(false);

    const handleShareTwitter = () => shareOnTwitter(getShareUrl(), post?.title || '');
    const handleShareFacebook = () => shareOnFacebook(getShareUrl());
    const handleShareLinkedIn = () => shareOnLinkedIn(getShareUrl());
    const handleCopyLink = async () => {
        const success = await copyToClipboard(getShareUrl());
        if (success) {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    if (!post) {
        return (
            <div className="blog-detail-page">
                <div className="container">
                    <div className="not-found">
                        <h2>Yazı Bulunamadı</h2>
                        <p>Aradığınız blog yazısı mevcut değil.</p>
                        <Link to="/daha-fazlasi/blog" className="btn btn-primary">Blog'a Dön</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-detail-page">
            <SEO
                title={post.title}
                description={post.excerpt}
                image={post.image}
                url={`/daha-fazlasi/blog/${post.id}`}
                type="article"
                article={{
                    datePublished: post.date,
                    author: post.author
                }}
            />
            {/* Hero Section */}
            <section className="blog-detail-hero" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="blog-detail-hero-overlay"></div>
                <div className="blog-detail-hero-content">
                    <span className="blog-detail-category">{post.category}</span>
                    <h1>{post.title}</h1>
                    <div className="blog-detail-meta">
                        <span className="meta-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="7" r="4" />
                                <path d="M5.5 21a7.5 7.5 0 0115 0" />
                            </svg>
                            {post.author}
                        </span>
                        <span className="meta-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <path d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            {post.date}
                        </span>
                    </div>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link to="/daha-fazlasi/blog">Blog</Link>
                        <span>/</span>
                        <span>{post.title.substring(0, 30)}...</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="blog-detail-content">
                <div className="container">
                    <article className="blog-article">
                        {post.youtubeId ? (
                            <div className="article-body">
                                <div dangerouslySetInnerHTML={{ __html: post.content.split('<div class="youtube-placeholder"></div>')[0] }} />
                                <figure className="article-image">
                                    <div className="youtube-embed">
                                        <YouTubeFacade youtubeId={post.youtubeId} customThumbnail={post.customThumbnail} />
                                    </div>
                                </figure>
                                <div dangerouslySetInnerHTML={{ __html: post.content.split('<div class="youtube-placeholder"></div>')[1] || '' }} />
                            </div>
                        ) : (
                            <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />
                        )}

                        {/* Share Section */}
                        <div className="share-section">
                            <h4>Bu Yazıyı Paylaşın</h4>
                            <div className="share-buttons">
                                <button className="share-btn twitter" onClick={handleShareTwitter} title="Twitter'da Paylaş">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </button>
                                <button className="share-btn facebook" onClick={handleShareFacebook} title="Facebook'ta Paylaş">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </button>
                                <button className="share-btn linkedin" onClick={handleShareLinkedIn} title="LinkedIn'de Paylaş">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <button className={`share-btn copy ${isCopied ? 'copied' : ''}`} onClick={handleCopyLink} title="Linki Kopyala">
                                    {isCopied ? (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Back to Blog */}
                    <div className="back-to-blog">
                        <Link to="/daha-fazlasi/blog" className="btn btn-outline-primary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Tüm Yazılara Dön
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;
