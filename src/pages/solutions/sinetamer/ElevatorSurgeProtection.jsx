import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const ElevatorSurgeProtection = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler', path: '/cozumler' },
        { label: 'SineTamer', path: '/cozumler/enerji-verimliligi' },
        { label: 'Asansör Aşırı Gerilim Koruması' }
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="Asansör Aşırı Gerilim Koruması"
                description="Asansör sistemlerinizi ve elektronik bileşenlerinizi aşırı gerilim dalgalanmalarına karşı SineTamer teknolojisi ile güvence altına alın."
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            <section className="category-features">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

                    {/* Section 1 */}
                    <div className="section-header" style={{ textAlign: 'left', margin: '3rem 0 2rem' }}>
                        <h2>Asansörler Günümüzde Hayati bir Önem Taşıyor!</h2>
                    </div>

                    <div style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '4rem' }}>
                        <div style={{ float: 'left', marginRight: '2rem', marginBottom: '1rem', width: '350px' }}>
                            <img
                                src="/images/sinetamer/elevatorsurge1.jpg"
                                loading='lazy'
                                alt="Asansör Kontrol Sistemleri"
                                style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-lg)', objectFit: 'cover', aspectRatio: '1/1' }}
                            />
                        </div>
                        <p style={{ marginBottom: '1.5rem' }}>
                            1878'den itibaren elektrikli asansörler, dünyanın binalarını sürekli artan yüksekliklere kadar genişletmesine olanak sağladı! Bugün itibariyle, yalnızca ABD'de her gün 900.000'den fazla asansör kullanılıyor. Ortalama olarak bu asansörler yılda 20.000 kişiyi taşıyor ve yıllık olarak inanılmaz bir şekilde 18 milyar yolcu taşıyor; biz ise ancak bizi yanlış katta bıraktıkları, kat ortasında durdukları veya tamamen arızalandıkları zamanları hatırlıyoruz.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Ne yazık ki, asansörler genellikle bir sorun çıkana kadar göz ardı ediliyor. Sorunu daha da karmaşık hale getiren şey ise, asansörlerin gelişmişliği arttıkça bakım ihtiyacının da artmasıdır. Bileşenler daha güvenilir olsa da, sayıca çok olmaları ve dar toleranslar, eski elektromekanik sistemlere göre daha yüksek bir bakım seviyesi gerektiriyor. Bakımın aksatılması performansı düşürecek, tepki süresini yavaşlatacak, arıza süresini artıracak ve maliyetleri yükseltecektir.
                        </p>
                        <div style={{ clear: 'both' }}></div>
                        <p style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                            İşin aslı şu ki, teknoloji ne kadar gelişmişse, düzenli önleyici ve proaktif bakım programına duyulan ihtiyaç da o kadar artar! Ne yazık ki, asansörler bir sorun çıkana kadar genellikle göz ardı edilir. Sorunu daha da karmaşıklaştıran şey ise, asansörlerin gelişmişliği arttıkça bakım ihtiyacının da artmasıdır. Bileşenler daha güvenilir olsa da, bunların çokluğu ve sıkı toleranslar, eski elektromekanik sistemlere göre daha yüksek bir bakım seviyesi gerektirir. Bakımı aksatmak performansı düşürür, tepki süresini yavaşlatır, arıza süresini artırır ve maliyetleri yükseltir.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Asansör sistemlerindeki en kritik ve hassas unsurlara proaktif olarak müdahale etmek, daha yüksek kullanılabilirlik ve daha düşük arıza süresi maliyetleri için en kesin yoldur. Ancak, bu konuda kullanılabilecek bilgi birikimi birçok açıdan sınırlıdır. Çoğunlukla bu sistemlerin bir miktar dayanıklı olduğu ve üreticinin koruma sağlamak için gerekli adımları attığı varsayılır. Ne yazık ki, tasarım, yapım ve inşaat dünyasındaki son derece rekabetçi yapı nedeniyle durum böyle değildir. En düşük teklifi veren firmanın projeyi almaması alışılmadık bir durum değildir. Neredeyse %100 oranında asansör sisteminin kritik donanım ve yazılımının korunmasına yönelik ek bir düşünceye yer verilmemiştir.
                        </p>
                        <p>
                            Günümüz asansörlerini çalıştırmak için kullanılan yazılım ve donanım, geçmiştekilere kıyasla kesinlikle daha güvenilir, ancak aynı zamanda güç dalgalanmalarına karşı da oldukça hassas. Daha da önemlisi, yazılımda karışıklığa ve asansör arızasına neden olan şeyin sadece yıldırım veya elektrik şirketinden kaynaklanan güçlü voltaj dalgalanmaları olmamasıdır; bu nedenle tipik bir aşırı gerilim koruyucu, arıza süresini sınırlamada ve güvenilirliği artırmada etkili olmayacaktır. Teknolojide farklı bir şeye ihtiyaç var. Biz o farkı yaratıyoruz!
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="section-header" style={{ textAlign: 'left', margin: '4rem 0 2rem' }}>
                        <h2>SineTamer@ Bir Standarttır!</h2>
                    </div>

                    <div style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '4rem' }}>
                        <div style={{ float: 'left', marginRight: '2rem', marginBottom: '1rem', width: '350px' }}>
                            <img
                                src="/images/sinetamer/elevatorsurge2.png"
                                loading='lazy'
                                alt="Modern Mimari ve Güvenlik"
                                style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-lg)', objectFit: 'cover', aspectRatio: '1/1' }}
                            />
                        </div>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Neden Sinetamer®? Tipik bir aşırı gerilim koruma cihazı (SPD) yalnızca voltajla tetiklenir. SPD'nin sınırlama işlemi, sinüs dalgasının üstünde/altında belirli bir noktada gerçekleşir. Bu işlemler, yıldırım veya elektrik şirketi olaylarının zararlı etkilerini azaltmada başarılı olsa da, sorunun gerçek kaynağıyla uğraşırken çoğunlukla işe yaramaz. Sadece voltaj olayları değil; frekans değişim olayları da söz konusudur! Yüksek endüktif yük geçiş olayları, diyotların yanlış tetiklenmesine, zamanlama sorunlarına, hatalara ve sıfırlamalara neden olan yanlış sıfır geçişleri oluşturacak şekilde meydana gelir.</p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Sinetamer®'in güçle ilgili mevcut sorunlara uygulandığı bilinen her durumda, tüm sorunlar ortadan kaldırılmış ve yatırımın geri dönüş süresi 10 ay veya daha kısa olmuştur. Yatırımın geri dönüş süresi 12 aydan kısa ise, çok iyi bir yatırım olarak kabul edilir.</p>
                        <div style={{ clear: 'both' }}></div>
                        <p style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                            Benzersiz Frekans Zayıflatma Ağı™ ve Geçici Eşitleme Ağı™ teknolojilerimiz, hem güç hem de kontrol bölümlerini ele alarak hem donanım hem de yazılım için doğru çalışma ortamını sağlar! Kesintiler ve arıza süreleri nadir olabilir, ancak riske değer mi? Tesis ve bina yöneticilerinin aklında personel güvenliği öncelikli olmalıdır. </p>
                        <p>
                            Asansör verimliliği ve kullanılabilirliği, başarılı servis şirketleri ve orijinal ekipman üreticileri (OEM'ler) için temel performans göstergeleridir. Her gecikme günü, arıza süresini ve maliyetli onarımları artırır.</p>
                    </div>

                    {/* Section 3 */}
                    <div className="section-header" style={{ textAlign: 'left', margin: '4rem 0 2rem' }}>
                        <h2>Neden Sinetamer®?</h2>
                    </div>

                    <div style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '4rem' }}>
                        <div style={{ float: 'left', marginRight: '2rem', marginBottom: '1rem', width: '350px' }}>
                            <img
                                src="/images/sinetamer/elevatorsurge1.jpg"
                                loading='lazy'
                                alt="Elektrik Panosu ve Teknoloji"
                                style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-lg)', objectFit: 'cover', aspectRatio: '1/1' }}
                            />
                        </div>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Orta Amerika'daki ilk deneyimlerimizden birinde, bir binada meydana gelen büyük bir elektrik dalgalanması sonucu çok sayıda asansör ve ilgili ekipman hasar görürken, hemen yanındaki aynı transformatörden beslenen binada tek bir asansör parçası bile zarar görmemişti. Bunun nedenini sorduğumuzda, ustabaşı "Sinetamer® kurduk" dedi. Kısa bir süre sonra, aynı ustabaşı Sinetamer®'ı da kurdu ve bugüne kadar her iki binada da herhangi bir arıza sorunu yaşanmadı. </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Güney Amerika’nın başkentindeki bir Dünya Ticaret Merkezi’nde, 30 asansör sisteminde günlük 5–7 arıza yaşanıyor, ayrıca 22 katın her birindeki HMI’larda sürekli programdan çıkma problemleri görülüyordu. Çözüm için bize başvuran asansör firmasının sahasına yapılan iki katlı kurulum sonrası tüm arızalar, kilitlenmeler ve program kayıpları %100 oranında ortadan kaldırıldı.</p>
                        <div style={{ clear: 'both' }}></div>
                        <p style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                            SineTamer, asansör sektöründeki dünya devleri tarafından tercih edilmektedir. Binlerce referans ve saha tecrübesi, cihazın etkinliğini kanıtlamıştır. Özellikle sahil bölgelerinde, yüksek yıldırım riski olan alanlarda veya endüstriyel tesislerin yakınındaki binalarda SineTamer kullanımı hayati bir fark yaratmaktadır.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Güney Brezilya'da bir otelde, panellere aşırı gerilim koruyucu cihaz takılmış olmasına rağmen, asansör arızaları sürekli tekrar ediyordu. "Aşırı gerilim koruyucu cihaz taktık ama sorun hala devam ediyor" itirazını aşmak zordu. Bu çok yaygın bir itirazdır. Asansör kontrol paneline tek bir ünite taktık ve mevcut aşırı gerilim koruyucu cihazı söktük. Bakım müdahalesinden 30 gün sonra arızalar %90 azaldı ve yatırımın geri dönüş süresi 9 ay oldu.</p>
                        <p>
                            Asansör verimliliği ve kullanılabilirliği, başarılı servis şirketleri ve orijinal ekipman üreticileri (OEM'ler) için temel performans göstergeleridir. Her gecikme günü, arıza süresini ve maliyetli onarımları artırır.
                        </p>
                        <p>OTIS , Hyundai , ThyssenKrupp , Schindler gibi şirketlerin yanı sıra, dünya çapında aşırı gerilim korumasında standart olarak kabul edilen Sinetamer®'e güvenen tesis mühendislerine  siz de katılın !</p>
                    </div>

                    {/* PDF Section */}
                    <div style={{
                        background: '#f8fafc',
                        padding: '3rem',
                        borderRadius: '20px',
                        marginTop: '4rem',
                        border: '1px solid #e2e8f0',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '2rem' }}>Teknik Dökümanlar</h3>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a
                                href="https://www.ecsintl.com/wp-content/uploads/2023/12/Elevadores2020_Esp.pdf"
                                target="_blank"
                                className="btn btn-primary"
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Asansör Koruma Broşürü (PDF)
                            </a>
                            <a
                                href="https://www.ecsintl.com/wp-content/uploads/2023/12/Elevadores2020_Esp.pdf"
                                target="_blank"
                                className="btn btn-primary"
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Teknik Spesifikasyonlar (PDF)
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="cta-container">
                        <h2>Sistemlerinizi Korumaya Bugün Başlayın</h2>
                        <p>Binanızdaki asansörlerin ömrünü uzatmak ve arıza sürelerini minimize etmek için uzman ekibimizle iletişime geçin.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                            <a
                                href="https://www.womner.com/iletisim"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-white"
                            >
                                Hızlı Teklif Alın
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ElevatorSurgeProtection;
