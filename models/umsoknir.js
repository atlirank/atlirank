const mongoose = require('mongoose')

const umsoknirSchema = new mongoose.Schema({
    Kennitala: {
        type: String,
        unique: true,
        required: true
    },

    Pos: {
        type: String,
        required: false
    },
    DagsUmsoknar: {
        type: String,
        required: false
    },
    Stadfesting: {
        type: String,
        required: false
    },
    Nafn: {
        type: String,
        required: false
    },
    Heimili: {
        type: String,
        required: false
    },
    Postnumer: {
        type: String,
        required: false
    },
    Poststod: {
        type: String,
        required: false
    },
    Kennitala: {
        type: String,
        required: false
    },
    Thonustuskrifstofa: {
        type: String,
        required: false
    },
    Netfang: {
        type: String,
        match: /.+\@.+\..+/,
        required: false
    },
    Gsm: {
        type: String,
        required: false
    },
    Simi: {
        type: String,
        required: false
    },
    Leyniord: {
        type: String,
        required: false
    },
    SveitarfelagDvalarstadur: {
        type: String,
        required: false
    },
    Kyn: {
        type: String,
        required: false
    },
    Starfshlutfall: {
        type: String,
        required: false
    },
    HlutfallOskarEftir: {
        type: String,
        required: false
    },
    OskAnnadAtvinnusvaedi: {
        type: String,
        required: false
    },
    getByrjadDatepicker: {
        type: String,
        required: false
    },
    Oskastarf: {
        type: String,
        required: false
    },
    Oskastarf1: {
        type: String,
        required: false
    },
    Oskastarf2: {
        type: String,
        required: false
    },
    numOskastorf: {
        type: String,
        required: false
    },
    Oskastarf3: {
        type: String,
        required: false
    },
    Oskastarf4: {
        type: String,
        required: false
    },
    Oskastarf5: {
        type: String,
        required: false
    },
    Oskastarf6: {
        type: String,
        required: false
    },
    Oskastarf7: {
        type: String,
        required: false
    },
    Oskastarf8: {
        type: String,
        required: false
    },
    Oskastarf9: {
        type: String,
        required: false
    },
    Oskastarf10: {
        type: String,
        required: false
    },
    AdalNam: {
        type: String,
        required: false
    },
    AdalNamGrada: {
        type: String,
        required: false
    },
    AdalNamHofst: {
        type: String,
        required: false
    },
    AdalNamLauk: {
        type: String,
        required: false
    },
    Nam: {
        type: String,
        required: false
    },
    NamGrada: {
        type: String,
        required: false
    },
    NamHofst: {
        type: String,
        required: false
    },
    NamLauk: {
        type: String,
        required: false
    },
    Nam1: {
        type: String,
        required: false
    },
    NamHofst1: {
        type: String,
        required: false
    },
    NamLauk1: {
        type: String,
        required: false
    },
    Nam2: {
        type: String,
        required: false
    },
    NamHofst2: {
        type: String,
        required: false
    },
    NamLauk2: {
        type: String,
        required: false
    },
    numNam: {
        type: String,
        required: false
    },
    Nam3: {
        type: String,
        required: false
    },
    NamHofst3: {
        type: String,
        required: false
    },
    NamLauk3: {
        type: String,
        required: false
    },
    Nam4: {
        type: String,
        required: false
    },
    NamHofst4: {
        type: String,
        required: false
    },
    NamLauk4: {
        type: String,
        required: false
    },
    Nam5: {
        type: String,
        required: false
    },
    NamHofst5: {
        type: String,
        required: false
    },
    NamLauk5: {
        type: String,
        required: false
    },
    Nam6: {
        type: String,
        required: false
    },
    NamHofst6: {
        type: String,
        required: false
    },
    NamLauk6: {
        type: String,
        required: false
    },
    Nam7: {
        type: String,
        required: false
    },
    NamHofst7: {
        type: String,
        required: false
    },
    NamLauk7: {
        type: String,
        required: false
    },
    Nam8: {
        type: String,
        required: false
    },
    NamHofst8: {
        type: String,
        required: false
    },
    NamLauk8: {
        type: String,
        required: false
    },
    Nam9: {
        type: String,
        required: false
    },
    NamHofst9: {
        type: String,
        required: false
    },
    NamLauk9: {
        type: String,
        required: false
    },
    Nam10: {
        type: String,
        required: false
    },
    NamGrada10: {
        type: String,
        required: false
    },
    NamHofst10: {
        type: String,
        required: false
    },
    NamLauk10: {
        type: String,
        required: false
    },
    NamVidbotarupplysingar: {
        type: String,
        required: false
    },
    Vinnuveitandi: {
        type: String,
        required: false
    },
    HofStarf: {
        type: String,
        required: false
    },
    HaettStarfi: {
        type: String,
        required: false
    },
    Starfsheiti: {
        type: String,
        required: false
    },
    Vinnuveitandi1: {
        type: String,
        required: false
    },
    HofStarf1: {
        type: String,
        required: false
    },
    HaettStarfi1: {
        type: String,
        required: false
    },
    Starfsheiti1: {
        type: String,
        required: false
    },
    numStarfsferill: {
        type: String,
        required: false
    },
    ReynslaVidbotarupplysingar: {
        type: String,
        required: false
    },
    B: {
        type: String,
        required: false
    },
    Vinnuvelarettindi: {
        type: String,
        required: false
    },
    Ritvinnsla: {
        type: String,
        required: false
    },
    RitvinnslaKodi: {
        type: String,
        required: false
    },
    RitvinnslaKunnatta: {
        type: String,
        required: false
    },
    Toflureiknir: {
        type: String,
        required: false
    },
    ToflureiknirKodi: {
        type: String,
        required: false
    },
    ToflureiknirKunnatta: {
        type: String,
        required: false
    },
    Tolvuthekking: {
        type: String,
        required: false
    },
    TolvuKunnatta: {
        type: String,
        required: false
    },
    Tolvuthekking1: {
        type: String,
        required: false
    },
    TolvuKunnatta1: {
        type: String,
        required: false
    },
    Tolvuthekking2: {
        type: String,
        required: false
    },
    TolvuKunnatta2: {
        type: String,
        required: false
    },
    numTolvuthekking: {
        type: String,
        required: false
    },
    Tolvuthekking3: {
        type: String,
        required: false
    },
    TolvuKunnatta3: {
        type: String,
        required: false
    },
    Tolvuthekking4: {
        type: String,
        required: false
    },
    TolvuKunnatta4: {
        type: String,
        required: false
    },
    Tolvuthekking5: {
        type: String,
        required: false
    },
    TolvuKunnatta5: {
        type: String,
        required: false
    },
    Tolvuthekking6: {
        type: String,
        required: false
    },
    TolvuKunnatta6: {
        type: String,
        required: false
    },
    TungumalIslenska: {
        type: String,
        required: false
    },
    TungumalIslenskaKodi: {
        type: String,
        required: false
    },
    TungumalIslenskaKunnatta: {
        type: String,
        required: false
    },
    TungumalEnska: {
        type: String,
        required: false
    },
    TungumalEnskaKodi: {
        type: String,
        required: false
    },
    TungumalEnskaKunnatta: {
        type: String,
        required: false
    },
    Tungumal: {
        type: String,
        required: false
    },
    TungumalKunnatta: {
        type: String,
        required: false
    },
    Tungumal1: {
        type: String,
        required: false
    },
    TungumalKunnatta1: {
        type: String,
        required: false
    },
    numTungumal: {
        type: String,
        required: false
    },
    Tungumal2: {
        type: String,
        required: false
    },
    TungumalKunnatta2: {
        type: String,
        required: false
    },
    Tungumal3: {
        type: String,
        required: false
    },
    TungumalKunnatta3: {
        type: String,
        required: false
    },
    Tungumal4: {
        type: String,
        required: false
    },
    TungumalKunnatta4: {
        type: String,
        required: false
    },
    Tungumal5: {
        type: String,
        required: false
    },
    TungumalKunnatta5: {
        type: String,
        required: false
    },
    Tungumal6: {
        type: String,
        required: false
    },
    TungumalKunnatta6: {
        type: String,
        required: false
    },
    UmsagnaradiliNafn: {
        type: String,
        required: false
    },
    UmsagnaradiliStada: {
        type: String,
        required: false
    },
    UmsagnaradiliVinnustadur: {
        type: String,
        required: false
    },
    UmsagnaradiliSimi: {
        type: String,
        required: false
    },
    UmsagnaradiliNafn1: {
        type: String,
        required: false
    },
    UmsagnaradiliStada1: {
        type: String,
        required: false
    },
    UmsagnaradiliVinnustadur1: {
        type: String,
        required: false
    },
    UmsagnaradiliSimi1: {
        type: String,
        required: false
    },
    numUmsagnaradili: {
        type: String,
        required: false
    },
    UmsagnaradiliNafn2: {
        type: String,
        required: false
    },
    UmsagnaradiliStada2: {
        type: String,
        required: false
    },
    UmsagnaradiliVinnustadur2: {
        type: String,
        required: false
    },
    UmsagnaradiliSimi2: {
        type: String,
        required: false
    },
    UmsagnaradiliNafn3: {
        type: String,
        required: false
    },
    UmsagnaradiliStada3: {
        type: String,
        required: false
    },
    UmsagnaradiliVinnustadur3: {
        type: String,
        required: false
    },
    UmsagnaradiliSimi3: {
        type: String,
        required: false
    },
    UmsagnaradiliNafn4: {
        type: String,
        required: false
    },
    UmsagnaradiliStada4: {
        type: String,
        required: false
    },
    UmsagnaradiliVinnustadur4: {
        type: String,
        required: false
    },
    UmsagnaradiliSimi4: {
        type: String,
        required: false
    },
    UmsagnaradiliNafn5: {
        type: String,
        required: false
    },
    UmsagnaradiliStada5: {
        type: String,
        required: false
    },
    UmsagnaradiliVinnustadur5: {
        type: String,
        required: false
    },
    UmsagnaradiliSimi5: {
        type: String,
        required: false
    },
    UmsagnaradiliNafn6: {
        type: String,
        required: false
    },
    UmsagnaradiliStada6: {
        type: String,
        required: false
    },
    UmsagnaradiliVinnustadur6: {
        type: String,
        required: false
    },
    UmsagnaradiliSimi6: {
        type: String,
        required: false
    },
    UmsagnaradiliNafn7: {
        type: String,
        required: false
    },
    UmsagnaradiliStada7: {
        type: String,
        required: false
    },
    UmsagnaradiliVinnustadur7: {
        type: String,
        required: false
    },
    UmsagnaradiliSimi7: {
        type: String,
        required: false
    },
    UmsagnaradiliNafn8: {
        type: String,
        required: false
    },
    UmsagnaradiliStada8: {
        type: String,
        required: false
    },
    UmsagnaradiliVinnustadur8: {
        type: String,
        required: false
    },
    UmsagnaradiliSimi8: {
        type: String,
        required: false
    },
    UmsagnaradiliNafn9: {
        type: String,
        required: false
    },
    UmsagnaradiliStada9: {
        type: String,
        required: false
    },
    UmsagnaradiliVinnustadur9: {
        type: String,
        required: false
    },
    UmsagnaradiliSimi9: {
        type: String,
        required: false
    },
    UmsagnaradiliNafn10: {
        type: String,
        required: false
    },
    UmsagnaradiliStada10: {
        type: String,
        required: false
    },
    UmsagnaradiliVinnustadur10: {
        type: String,
        required: false
    },
    UmsagnaradiliSimi10: {
        type: String,
        required: false
    },
    AnnadVidbotarupplysingar: {
        type: String,
        required: false
    },
    KennitalaBarn: {
        type: String,
        required: false
    },
    NafnBarn: {
        type: String,
        required: false
    },
    KennitalaBarn1: {
        type: String,
        required: false
    },
    NafnBarn1: {
        type: String,
        required: false
    },
    numBorn: {
        type: String,
        required: false
    },
    KennitalaBarn2: {
        type: String,
        required: false
    },
    NafnBarn2: {
        type: String,
        required: false
    },
    KennitalaBarn3: {
        type: String,
        required: false
    },
    NafnBarn3: {
        type: String,
        required: false
    },
    KennitalaBarn4: {
        type: String,
        required: false
    },
    NafnBarn4: {
        type: String,
        required: false
    },
    KennitalaBarn5: {
        type: String,
        required: false
    },
    NafnBarn5: {
        type: String,
        required: false
    },
    KennitalaBarn6: {
        type: String,
        required: false
    },
    NafnBarn6: {
        type: String,
        required: false
    },
    KennitalaBarn7: {
        type: String,
        required: false
    },
    NafnBarn7: {
        type: String,
        required: false
    },
    KennitalaBarn8: {
        type: String,
        required: false
    },
    NafnBarn8: {
        type: String,
        required: false
    },
    KennitalaBarn9: {
        type: String,
        required: false
    },
    NafnBarn9: {
        type: String,
        required: false
    },
    KennitalaBarn10: {
        type: String,
        required: false
    },
    NafnBarn10: {
        type: String,
        required: false
    },
    KennitalaBarn11: {
        type: String,
        required: false
    },
    NafnBarn11: {
        type: String,
        required: false
    },
    KennitalaBarn12: {
        type: String,
        required: false
    },
    NafnBarn12: {
        type: String,
        required: false
    },
    KennitalaBarn13: {
        type: String,
        required: false
    },
    NafnBarn13: {
        type: String,
        required: false
    },
    KennitalaBarn14: {
        type: String,
        required: false
    },
    NafnBarn14: {
        type: String,
        required: false
    },
    KennitalaBarn15: {
        type: String,
        required: false
    },
    NafnBarn15: {
        type: String,
        required: false
    },
    KennitalaBarn16: {
        type: String,
        required: false
    },
    NafnBarn16: {
        type: String,
        required: false
    },
    Banki: {
        type: String,
        required: false
    },
    HB: {
        type: String,
        required: false
    },
    ReiknNr: {
        type: String,
        required: false
    },
    lifeyrissjodur: {
        type: String,
        required: false
    },
    Vidbotarlifeyrissparnadur: {
        type: String,
        required: false
    },
    VidbotarlifeyrissparnadurHlutfall: {
        type: String,
        required: false
    },
    Vidbotarlifeyrissparnadur1: {
        type: String,
        required: false
    },
    VidbotarlifeyrissparnadurHlutfall1: {
        type: String,
        required: false
    },
    numSereign: {
        type: String,
        required: false
    },
    Verkalydsfelag: {
        type: String,
        required: false
    },
    personuafslatturnyting: {
        type: String,
        required: false
    },
    personuafslatturnytinghlf: {
        type: String,
        required: false
    },
    personuafslatturnyttur: {
        type: String,
        required: false
    },
    personuafslatturmakanyting: {
        type: String,
        required: false
    },
    personuafslatturmakanytinghlf: {
        type: String,
        required: false
    },
    personuafslatturmakanyttur: {
        type: String,
        required: false
    },
    Orlof: {
        type: String,
        required: false
    },
    OrlofsDagar: {
        type: String,
        required: false
    },
    OrlofFra: {
        type: String,
        required: false
    },
    OrlofTil: {
        type: String,
        required: false
    },
    OrlofsDagar1: {
        type: String,
        required: false
    },
    OrlofFra1: {
        type: String,
        required: false
    },
    OrlofTil1: {
        type: String,
        required: false
    },
    numOrlof: {
        type: String,
        required: false
    },
    Uppsagnarfrestur: {
        type: String,
        required: false
    },
    Vinnufaerni: {
        type: String,
        required: false
    },
    ShowHideGreidslurTryggingarstofnun: {
        type: String,
        required: false
    },
    GreidslurTryggingarstofnunarTegund: {
        type: String,
        required: false
    },
    GreidslurTryggingarstofnunarUpphaed: {
        type: String,
        required: false
    },
    GreidslurTryggingarstofnunarTegund1: {
        type: String,
        required: false
    },
    GreidslurTryggingarstofnunarUpphaed1: {
        type: String,
        required: false
    },
    GreidslurTryggingarstofnunarTegund2: {
        type: String,
        required: false
    },
    GreidslurTryggingarstofnunarUpphaed2: {
        type: String,
        required: false
    },
    numGreidslurTryggingarstofnunar: {
        type: String,
        required: false
    },
    ShowHideGreidslurLifeyrissjods: {
        type: String,
        required: false
    },
    GreidslurLifeyrissjods: {
        type: String,
        required: false
    },
    GreidslurLifeyrissjodsTegund: {
        type: String,
        required: false
    },
    GreidslurLifeyrissjodsUpphaed: {
        type: String,
        required: false
    },
    GreidslurLifeyrissjods1: {
        type: String,
        required: false
    },
    GreidslurLifeyrissjodsTegund1: {
        type: String,
        required: false
    },
    GreidslurLifeyrissjodsUpphaed1: {
        type: String,
        required: false
    },
    GreidslurLifeyrissjods2: {
        type: String,
        required: false
    },
    GreidslurLifeyrissjodsTegund2: {
        type: String,
        required: false
    },
    GreidslurLifeyrissjodsUpphaed2: {
        type: String,
        required: false
    },
    numGreidslurLifeyrissjods: {
        type: String,
        required: false
    },
    ShowHideGreidslurSereignarsjods: {
        type: String,
        required: false
    },
    GreidslurSereignarsjods: {
        type: String,
        required: false
    },
    GreidslurSereignarsjodsUpphaed: {
        type: String,
        required: false
    },
    GreidslurSereignarsjods1: {
        type: String,
        required: false
    },
    GreidslurSereignarsjodsUpphaed1: {
        type: String,
        required: false
    },
    numGreidslurSereignarsjods: {
        type: String,
        required: false
    },
    Sjalfstaettstarfandi: {
        type: String,
        required: false
    },
    Atvinnuleysi: {
        type: String,
        required: false
    },
    KennitalaGjaldthrot: {
        type: String,
        required: false
    },
    Vinna: {
        type: String,
        required: false
    },
    HlutastarfKtFyrirtaekisBotaumsokn: {
        type: String,
        required: false
    },
    HlutastarfNafnFyrirtaekisBotaumsokn: {
        type: String,
        required: false
    },
    HlutastarfHlutfallBotaumsokn: {
        type: String,
        required: false
    },
    HlutastarfUpphaedBotaumsokn: {
        type: String,
        required: false
    },
    HlutastarfUpphafsDagsBotaumsokn: {
        type: String,
        required: false
    },
    HlutastarfKtFyrirtaekisBotaumsokn1: {
        type: String,
        required: false
    },
    HlutastarfNafnFyrirtaekisBotaumsokn1: {
        type: String,
        required: false
    },
    HlutastarfHlutfallBotaumsokn1: {
        type: String,
        required: false
    },
    HlutastarfUpphaedBotaumsokn1: {
        type: String,
        required: false
    },
    HlutastarfUpphafsDagsBotaumsokn1: {
        type: String,
        required: false
    },
    numTekjurAfHlutastarfiBotaumsokn: {
        type: String,
        required: false
    },
    Fjarmalstekjur: {
        type: String,
        required: false
    },
    ErINami: {
        type: String,
        required: false
    },
    NamSidOnn: {
        type: String,
        required: false
    },
    NamLokidProf: {
        type: String,
        required: false
    },
    NamSkradurNaest: {
        type: String,
        required: false
    },
    AnnadUpplysingar: {
        type: String,
        required: false
    }
    



    
})



module.exports = mongoose.model('Umsoknir', umsoknirSchema)