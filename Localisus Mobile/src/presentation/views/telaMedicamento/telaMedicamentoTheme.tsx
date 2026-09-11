{/* 
            <View style={styles.frm}>
                <View style={{ right: 150 }}> */}
                    {/* <View style={{ flexDirection: 'row', left: 10, gap: 10, bottom: 4 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={82} height={22} backgroundColor="#7be6b4ff">
                            <Text style={styles.txtAnalgesico}> Analgesico </Text>
                        </RoundedButton>
                    </View>

                    <View style={{ flexDirection: 'row', left: 105, gap: 10, bottom: 26 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={87} height={22} backgroundColor="#FFFDC4">
                            <Text style={styles.txtAnalgesico}> Antibioticos </Text>
                        </RoundedButton>
                    </View>

                    <View style={{ flexDirection: 'row', left: 200, gap: 10, bottom: 48 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={82} height={22} backgroundColor="#D9D9D9">
                            <Text style={styles.txtAnalgesico}> Diuréticos </Text>
                        </RoundedButton>
                    </View>

                    <View style={{ flexDirection: 'row', left: 290, gap: 10, bottom: 70 }}>
                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={82} height={22} backgroundColor="#FFC4C4">
                            <Text style={styles.txtAnalgesico}> Estatinas </Text>
                        </RoundedButton>
                    </View>
                    
                    TODOS OS ELEMENTOS AQUI VÃO SER TROCADOS PELO COMPONENTE DE BOTÃO
                        
                    */}
                {/* </View> */}

                       {/* CAIXA DIPIRONA - Imagem alterada aqui 
                                <View style={styles.caixaDipirona}>
                                    <View style={{ left: 228, top: 100 }}>
                                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={113} height={31} backgroundColor="#FFC4C4">
                                            <Image source={require("../../../assets/img/capsula.png")} style={styles.imgcapsula} />
                                            <Text style={styles.txtEncontrar}> Encontrar </Text>
                                        </RoundedButton>
                                    </View>
                
                
                                    <View style={{ left: 187, top: 70 }}>
                                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={30} height={30}>
                                            <Image source={require("../../../assets/img/star.png")} style={styles.imgStar} />
                                        </RoundedButton>
                                    </View>
                
                                    {/* Mudado de styles.imgDipirona para styles.imgDipironaComTransparencia */}
                                   
                {
                                /* CAIXA IBUPROFENO *
                                <View style={styles.caixaIbuprofeno}>
                                    <View style={{ left: 228, top: 100 }}>
                                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={113} height={31} backgroundColor="#FFC4C4">
                                            <Image source={require("../../../assets/img/capsula.png")} style={styles.imgcapsula} />
                                            <Text style={styles.txtEncontrar}> Encontrar </Text>
                                        </RoundedButton>
                                    </View>
                
                                    <View style={{ left: 187, top: 70 }}>
                                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={30} height={30}>
                                            <Image source={require("../../../assets/img/star.png")} style={styles.imgStar} />
                                        </RoundedButton>
                                    </View>
                
                                    <Image source={require("../../../assets/img/Dipirona.png")} style={styles.imgDipirona} />
                                    <Text style={styles.txtIbuprofeno}> Ibuprofeno </Text>
                                    <Text style={styles.txtinfor}>
                                        dipirona, é um remédio analgésico e antitérmico, que age reduzindo a produção de substâncias no corpo responsáveis por causar dor ou febre
                                    </Text>
                                </View>
                                */
                
                                /* CAIXA CAPTOPRIL 
                                <View style={styles.caixaCaptopril}>
                                    <View style={{ left: 228, top: 100 }}>
                                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={113} height={31} backgroundColor="#FFC4C4">
                                            <Image source={require("../../../assets/img/capsula.png")} style={styles.imgcapsula} />
                                            <Text style={styles.txtEncontrar}> Encontrar </Text>
                                        </RoundedButton>
                                    </View>
                
                                    <View style={{ left: 187, top: 70 }}>
                                        <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={30} height={30}>
                                            <Image source={require("../../../assets/img/star.png")} style={styles.imgStar} />
                                        </RoundedButton>
                                    </View>
                                    
                                    <View>
                                        <Image source={require("../../../assets/img/Dipirona.png")} style={styles.imgDipirona} />
                                        <LinearGradient
                                            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                                            style={styles.gradientOverlay}
                                        />
                                    </View>
                
                                    <Text style={styles.txtDipirona}> Captopril </Text>
                                    <Text style={styles.txtinfor}>
                                        dipirona, é um remédio analgésico e antitérmico, que age reduzindo a produção de substâncias no corpo responsáveis por causar dor ou febre
                                    </Text>
                                </View>*/}
                 
                
                            {/* BOTÕES DE NAVEGAÇÃO INFERIOR 
                            <View style={styles.bntcont}>
                                <View style={styles.bntRemedios}>
                                    <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={191} height={53} backgroundColor="#FFC4C4">
                                        <Image source={require("../../../assets/img/capsula.png")} style={styles.imgcapsularemedios} />
                                        <Text style={styles.txtRemedios}> Remédios </Text>
                                    </RoundedButton>
                                </View>
                
                                <View style={styles.bntLembretes}>
                                    <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={191} height={53} backgroundColor="#FFFDC4">
                                        <Image source={require("../../../assets/img/Relogio.png")} style={styles.imgRelogio} />
                                        <Text style={styles.txtLembretes}> Lembretes </Text>
                                    </RoundedButton>
                                </View>
                
                                <View style={styles.bntLocalizacao}>
                                    <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={191} height={53} backgroundColor="#C4FFE3">
                                        <Image source={require("../../../assets/img/Mapa.png")} style={styles.imgMap} />
                                        <Text style={styles.txtLocalizacao}> Localização </Text>
                                    </RoundedButton>
                                </View>
                
                                <View style={styles.bntAjuda}>
                                    <RoundedButton onPress={() => navigation.navigate('MedicamentoScreen')} width={191} height={53} backgroundColor="#EBF9FF">
                                        <Image source={require("../../../assets/img/icon-ajuda.png")} style={styles.imgponto} />
                                        <Text style={styles.txtAjuda}> Ajuda </Text>
                                    </RoundedButton>
                                </View>
                                
                            </View>
                */}       