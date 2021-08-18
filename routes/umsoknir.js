const express = require('express')
const router = express.Router()
const Umsoknir = require('../models/umsoknir')
const m2s = require('mongoose-to-swagger');
const swaggerSchema = m2s(Umsoknir);

/**
 * @swagger
 * /umsoknir:
 *   get:
 *     description: Allar umsóknir
 *     responses:
 *       200:
 *         description: Allar umsóknir
 */
router.get('/', async(req,res) => {
    try{
        const umsoknir = await Umsoknir.find()
        res.json(umsoknir)
    }catch(err){
        res.send('Error' + err)
    }
})

/**
 * @swagger
 * /umsoknir/{Kennitala}:
 *   get:
 *     description: Umsókn einstaklings
 *     responses:
 *       200:
 *         description: Umsókn einstaklings
 */
router.get('/:Kennitala', async(req,res) => {
    try{
        const umsoknir  = await Umsoknir.findOne({ Kennitala: req.params.Kennitala })
        
        res.json(umsoknir)
        
    }catch(err){
        res.send('Error' + err)
    }
})


/**
 * @swagger
 * /umsoknir/:
 *   post:
 *     description: Ný umsókn einstaklings
 *     responses:
 *       200:
 *         description: Ný umsókn einstaklings
 */
router.post('/', async(req,res) => {
    const umsokn = new Umsoknir({
        Kennitala: req.body.Kennitala,
        userssn: req.body.userssn,
        Pos: req.body.Pos,
        DagsUmsoknar: req.body.DagsUmsoknar,
        Stadfesting: req.body.Stadfesting,
        Nafn: req.body.Nafn,
        Heimili: req.body.Heimili,
        Postnumer: req.body.Postnumer,
        Poststod: req.body.Poststod,
        Kennitala: req.body.Kennitala,
        Thonustuskrifstofa: req.body.Thonustuskrifstofa,
        Netfang: req.body.Netfang,
        Gsm: req.body.Gsm,
        Simi: req.body.Simi,
        Leyniord: req.body.Leyniord,
        SveitarfelagDvalarstadur: req.body.SveitarfelagDvalarstadur,
        Kyn: req.body.Kyn,
        Starfshlutfall: req.body.Starfshlutfall,
        HlutfallOskarEftir: req.body.HlutfallOskarEftir,
        OskAnnadAtvinnusvaedi: req.body.OskAnnadAtvinnusvaedi,
        getByrjadDatepicker: req.body.getByrjadDatepicker,
        Oskastarf: req.body.Oskastarf,
        Oskastarf1: req.body.Oskastarf1,
        Oskastarf2: req.body.Oskastarf2,
        numOskastorf: req.body.numOskastorf,
        Oskastarf3: req.body.Oskastarf3,
        Oskastarf4: req.body.Oskastarf4,
        Oskastarf5: req.body.Oskastarf5,
        Oskastarf6: req.body.Oskastarf6,
        Oskastarf7: req.body.Oskastarf7,
        Oskastarf8: req.body.Oskastarf8,
        Oskastarf9: req.body.Oskastarf9,
        Oskastarf10: req.body.Oskastarf10,
        AdalNam: req.body.AdalNam,
        AdalNamGrada: req.body.AdalNamGrada,
        AdalNamHofst: req.body.AdalNamHofst,
        AdalNamLauk: req.body.AdalNamLauk,
        Nam: req.body.Nam,
        NamGrada: req.body.NamGrada,
        NamHofst: req.body.NamHofst,
        NamLauk: req.body.NamLauk,
        Nam1: req.body.Nam1,
        NamHofst1: req.body.NamHofst1,
        NamLauk1: req.body.NamLauk1,
        Nam2: req.body.Nam2,
        NamHofst2: req.body.NamHofst2,
        NamLauk2: req.body.NamLauk2,
        numNam: req.body.numNam,
        Nam3: req.body.Nam3,
        NamHofst3: req.body.NamHofst3,
        NamLauk3: req.body.NamLauk3,
        Nam4: req.body.Nam4,
        NamHofst4: req.body.NamHofst4,
        NamLauk4: req.body.NamLauk4,
        Nam5: req.body.Nam5,
        NamHofst5: req.body.NamHofst5,
        NamLauk5: req.body.NamLauk5,
        Nam6: req.body.Nam6,
        NamHofst6: req.body.NamHofst6,
        NamLauk6: req.body.NamLauk6,
        Nam7: req.body.Nam7,
        NamHofst7: req.body.NamHofst7,
        NamLauk7: req.body.NamLauk7,
        Nam8: req.body.Nam8,
        NamHofst8: req.body.NamHofst8,
        NamLauk8: req.body.NamLauk8,
        Nam9: req.body.Nam9,
        NamHofst9: req.body.NamHofst9,
        NamLauk9: req.body.NamLauk9,
        Nam10: req.body.Nam10,
        NamGrada10: req.body.NamGrada10,
        NamHofst10: req.body.NamHofst10,
        NamLauk10: req.body.NamLauk10,
        NamVidbotarupplysingar: req.body.NamVidbotarupplysingar,
        Vinnuveitandi: req.body.Vinnuveitandi,
        HofStarf: req.body.HofStarf,
        HaettStarfi: req.body.HaettStarfi,
        Starfsheiti: req.body.Starfsheiti,
        Vinnuveitandi1: req.body.Vinnuveitandi1,
        HofStarf1: req.body.HofStarf1,
        HaettStarfi1: req.body.HaettStarfi1,
        Starfsheiti1: req.body.Starfsheiti1,
        numStarfsferill: req.body.numStarfsferill,
        ReynslaVidbotarupplysingar: req.body.ReynslaVidbotarupplysingar,
        B: req.body.B,
        Vinnuvelarettindi: req.body.Vinnuvelarettindi,
        Ritvinnsla: req.body.Ritvinnsla,
        RitvinnslaKodi: req.body.RitvinnslaKodi,
        RitvinnslaKunnatta: req.body.RitvinnslaKunnatta,
        Toflureiknir: req.body.Toflureiknir,
        ToflureiknirKodi: req.body.ToflureiknirKodi,
        ToflureiknirKunnatta: req.body.ToflureiknirKunnatta,
        Tolvuthekking: req.body.Tolvuthekking,
        TolvuKunnatta: req.body.TolvuKunnatta,
        Tolvuthekking1: req.body.Tolvuthekking1,
        TolvuKunnatta1: req.body.TolvuKunnatta1,
        Tolvuthekking2: req.body.Tolvuthekking2,
        TolvuKunnatta2: req.body.TolvuKunnatta2,
        numTolvuthekking: req.body.numTolvuthekking,
        Tolvuthekking3: req.body.Tolvuthekking3,
        TolvuKunnatta3: req.body.TolvuKunnatta3,
        Tolvuthekking4: req.body.Tolvuthekking4,
        TolvuKunnatta4: req.body.TolvuKunnatta4,
        Tolvuthekking5: req.body.Tolvuthekking5,
        TolvuKunnatta5: req.body.TolvuKunnatta5,
        Tolvuthekking6: req.body.Tolvuthekking6,
        TolvuKunnatta6: req.body.TolvuKunnatta6,
        TungumalIslenska: req.body.TungumalIslenska,
        TungumalIslenskaKodi: req.body.TungumalIslenskaKodi,
        TungumalIslenskaKunnatta: req.body.TungumalIslenskaKunnatta,
        TungumalEnska: req.body.TungumalEnska,
        TungumalEnskaKodi: req.body.TungumalEnskaKodi,
        TungumalEnskaKunnatta: req.body.TungumalEnskaKunnatta,
        Tungumal: req.body.Tungumal,
        TungumalKunnatta: req.body.TungumalKunnatta,
        Tungumal1: req.body.Tungumal1,
        TungumalKunnatta1: req.body.TungumalKunnatta1,
        numTungumal: req.body.numTungumal,
        Tungumal2: req.body.Tungumal2,
        TungumalKunnatta2: req.body.TungumalKunnatta2,
        Tungumal3: req.body.Tungumal3,
        TungumalKunnatta3: req.body.TungumalKunnatta3,
        Tungumal4: req.body.Tungumal4,
        TungumalKunnatta4: req.body.TungumalKunnatta4,
        Tungumal5: req.body.Tungumal5,
        TungumalKunnatta5: req.body.TungumalKunnatta5,
        Tungumal6: req.body.Tungumal6,
        TungumalKunnatta6: req.body.TungumalKunnatta6,
        UmsagnaradiliNafn: req.body.UmsagnaradiliNafn,
        UmsagnaradiliStada: req.body.UmsagnaradiliStada,
        UmsagnaradiliVinnustadur: req.body.UmsagnaradiliVinnustadur,
        UmsagnaradiliSimi: req.body.UmsagnaradiliSimi,
        UmsagnaradiliNafn1: req.body.UmsagnaradiliNafn1,
        UmsagnaradiliStada1: req.body.UmsagnaradiliStada1,
        UmsagnaradiliVinnustadur1: req.body.UmsagnaradiliVinnustadur1,
        UmsagnaradiliSimi1: req.body.UmsagnaradiliSimi1,
        numUmsagnaradili: req.body.numUmsagnaradili,
        UmsagnaradiliNafn2: req.body.UmsagnaradiliNafn2,
        UmsagnaradiliStada2: req.body.UmsagnaradiliStada2,
        UmsagnaradiliVinnustadur2: req.body.UmsagnaradiliVinnustadur2,
        UmsagnaradiliSimi2: req.body.UmsagnaradiliSimi2,
        UmsagnaradiliNafn3: req.body.UmsagnaradiliNafn3,
        UmsagnaradiliStada3: req.body.UmsagnaradiliStada3,
        UmsagnaradiliVinnustadur3: req.body.UmsagnaradiliVinnustadur3,
        UmsagnaradiliSimi3: req.body.UmsagnaradiliSimi3,
        UmsagnaradiliNafn4: req.body.UmsagnaradiliNafn4,
        UmsagnaradiliStada4: req.body.UmsagnaradiliStada4,
        UmsagnaradiliVinnustadur4: req.body.UmsagnaradiliVinnustadur4,
        UmsagnaradiliSimi4: req.body.UmsagnaradiliSimi4,
        UmsagnaradiliNafn5: req.body.UmsagnaradiliNafn5,
        UmsagnaradiliStada5: req.body.UmsagnaradiliStada5,
        UmsagnaradiliVinnustadur5: req.body.UmsagnaradiliVinnustadur5,
        UmsagnaradiliSimi5: req.body.UmsagnaradiliSimi5,
        UmsagnaradiliNafn6: req.body.UmsagnaradiliNafn6,
        UmsagnaradiliStada6: req.body.UmsagnaradiliStada6,
        UmsagnaradiliVinnustadur6: req.body.UmsagnaradiliVinnustadur6,
        UmsagnaradiliSimi6: req.body.UmsagnaradiliSimi6,
        UmsagnaradiliNafn7: req.body.UmsagnaradiliNafn7,
        UmsagnaradiliStada7: req.body.UmsagnaradiliStada7,
        UmsagnaradiliVinnustadur7: req.body.UmsagnaradiliVinnustadur7,
        UmsagnaradiliSimi7: req.body.UmsagnaradiliSimi7,
        UmsagnaradiliNafn8: req.body.UmsagnaradiliNafn8,
        UmsagnaradiliStada8: req.body.UmsagnaradiliStada8,
        UmsagnaradiliVinnustadur8: req.body.UmsagnaradiliVinnustadur8,
        UmsagnaradiliSimi8: req.body.UmsagnaradiliSimi8,
        UmsagnaradiliNafn9: req.body.UmsagnaradiliNafn9,
        UmsagnaradiliStada9: req.body.UmsagnaradiliStada9,
        UmsagnaradiliVinnustadur9: req.body.UmsagnaradiliVinnustadur9,
        UmsagnaradiliSimi9: req.body.UmsagnaradiliSimi9,
        UmsagnaradiliNafn10: req.body.UmsagnaradiliNafn10,
        UmsagnaradiliStada10: req.body.UmsagnaradiliStada10,
        UmsagnaradiliVinnustadur10: req.body.UmsagnaradiliVinnustadur10,
        UmsagnaradiliSimi10: req.body.UmsagnaradiliSimi10,
        AnnadVidbotarupplysingar: req.body.AnnadVidbotarupplysingar,
        KennitalaBarn: req.body.KennitalaBarn,
        NafnBarn: req.body.NafnBarn,
        KennitalaBarn1: req.body.KennitalaBarn1,
        NafnBarn1: req.body.NafnBarn1,
        numBorn: req.body.numBorn,
        KennitalaBarn2: req.body.KennitalaBarn2,
        NafnBarn2: req.body.NafnBarn2,
        KennitalaBarn3: req.body.KennitalaBarn3,
        NafnBarn3: req.body.NafnBarn3,
        KennitalaBarn4: req.body.KennitalaBarn4,
        NafnBarn4: req.body.NafnBarn4,
        KennitalaBarn5: req.body.KennitalaBarn5,
        NafnBarn5: req.body.NafnBarn5,
        KennitalaBarn6: req.body.KennitalaBarn6,
        NafnBarn6: req.body.NafnBarn6,
        KennitalaBarn7: req.body.KennitalaBarn7,
        NafnBarn7: req.body.NafnBarn7,
        KennitalaBarn8: req.body.KennitalaBarn8,
        NafnBarn8: req.body.NafnBarn8,
        KennitalaBarn9: req.body.KennitalaBarn9,
        NafnBarn9: req.body.NafnBarn9,
        KennitalaBarn10: req.body.KennitalaBarn10,
        NafnBarn10: req.body.NafnBarn10,
        KennitalaBarn11: req.body.KennitalaBarn11,
        NafnBarn11: req.body.NafnBarn11,
        KennitalaBarn12: req.body.KennitalaBarn12,
        NafnBarn12: req.body.NafnBarn12,
        KennitalaBarn13: req.body.KennitalaBarn13,
        NafnBarn13: req.body.NafnBarn13,
        KennitalaBarn14: req.body.KennitalaBarn14,
        NafnBarn14: req.body.NafnBarn14,
        KennitalaBarn15: req.body.KennitalaBarn15,
        NafnBarn15: req.body.NafnBarn15,
        KennitalaBarn16: req.body.KennitalaBarn16,
        NafnBarn16: req.body.NafnBarn16,
        Banki: req.body.Banki,
        HB: req.body.HB,
        ReiknNr: req.body.ReiknNr,
        lifeyrissjodur: req.body.lifeyrissjodur,
        Vidbotarlifeyrissparnadur: req.body.Vidbotarlifeyrissparnadur,
        VidbotarlifeyrissparnadurHlutfall: req.body.VidbotarlifeyrissparnadurHlutfall,
        Vidbotarlifeyrissparnadur1: req.body.Vidbotarlifeyrissparnadur1,
        VidbotarlifeyrissparnadurHlutfall1: req.body.VidbotarlifeyrissparnadurHlutfall1,
        numSereign: req.body.numSereign,
        Verkalydsfelag: req.body.Verkalydsfelag,
        personuafslatturnyting: req.body.personuafslatturnyting,
        personuafslatturnytinghlf: req.body.personuafslatturnytinghlf,
        personuafslatturnyttur: req.body.personuafslatturnyttur,
        personuafslatturmakanyting: req.body.personuafslatturmakanyting,
        personuafslatturmakanytinghlf: req.body.personuafslatturmakanytinghlf,
        personuafslatturmakanyttur: req.body.personuafslatturmakanyttur,
        Orlof: req.body.Orlof,
        OrlofsDagar: req.body.OrlofsDagar,
        OrlofFra: req.body.OrlofFra,
        OrlofTil: req.body.OrlofTil,
        OrlofsDagar1: req.body.OrlofsDagar1,
        OrlofFra1: req.body.OrlofFra1,
        OrlofTil1: req.body.OrlofTil1,
        numOrlof: req.body.numOrlof,
        Uppsagnarfrestur: req.body.Uppsagnarfrestur,
        Vinnufaerni: req.body.Vinnufaerni,
        ShowHideGreidslurTryggingarstofnun: req.body.ShowHideGreidslurTryggingarstofnun,
        GreidslurTryggingarstofnunarTegund: req.body.GreidslurTryggingarstofnunarTegund,
        GreidslurTryggingarstofnunarUpphaed: req.body.GreidslurTryggingarstofnunarUpphaed,
        GreidslurTryggingarstofnunarTegund1: req.body.GreidslurTryggingarstofnunarTegund1,
        GreidslurTryggingarstofnunarUpphaed1: req.body.GreidslurTryggingarstofnunarUpphaed1,
        GreidslurTryggingarstofnunarTegund2: req.body.GreidslurTryggingarstofnunarTegund2,
        GreidslurTryggingarstofnunarUpphaed2: req.body.GreidslurTryggingarstofnunarUpphaed2,
        numGreidslurTryggingarstofnunar: req.body.numGreidslurTryggingarstofnunar,
        ShowHideGreidslurLifeyrissjods: req.body.ShowHideGreidslurLifeyrissjods,
        GreidslurLifeyrissjods: req.body.GreidslurLifeyrissjods,
        GreidslurLifeyrissjodsTegund: req.body.GreidslurLifeyrissjodsTegund,
        GreidslurLifeyrissjodsUpphaed: req.body.GreidslurLifeyrissjodsUpphaed,
        GreidslurLifeyrissjods1: req.body.GreidslurLifeyrissjods1,
        GreidslurLifeyrissjodsTegund1: req.body.GreidslurLifeyrissjodsTegund1,
        GreidslurLifeyrissjodsUpphaed1: req.body.GreidslurLifeyrissjodsUpphaed1,
        GreidslurLifeyrissjods2: req.body.GreidslurLifeyrissjods2,
        GreidslurLifeyrissjodsTegund2: req.body.GreidslurLifeyrissjodsTegund2,
        GreidslurLifeyrissjodsUpphaed2: req.body.GreidslurLifeyrissjodsUpphaed2,
        numGreidslurLifeyrissjods: req.body.numGreidslurLifeyrissjods,
        ShowHideGreidslurSereignarsjods: req.body.ShowHideGreidslurSereignarsjods,
        GreidslurSereignarsjods: req.body.GreidslurSereignarsjods,
        GreidslurSereignarsjodsUpphaed: req.body.GreidslurSereignarsjodsUpphaed,
        GreidslurSereignarsjods1: req.body.GreidslurSereignarsjods1,
        GreidslurSereignarsjodsUpphaed1: req.body.GreidslurSereignarsjodsUpphaed1,
        numGreidslurSereignarsjods: req.body.numGreidslurSereignarsjods,
        Sjalfstaettstarfandi: req.body.Sjalfstaettstarfandi,
        Atvinnuleysi: req.body.Atvinnuleysi,
        KennitalaGjaldthrot: req.body.KennitalaGjaldthrot,
        Vinna: req.body.Vinna,
        HlutastarfKtFyrirtaekisBotaumsokn: req.body.HlutastarfKtFyrirtaekisBotaumsokn,
        HlutastarfNafnFyrirtaekisBotaumsokn: req.body.HlutastarfNafnFyrirtaekisBotaumsokn,
        HlutastarfHlutfallBotaumsokn: req.body.HlutastarfHlutfallBotaumsokn,
        HlutastarfUpphaedBotaumsokn: req.body.HlutastarfUpphaedBotaumsokn,
        HlutastarfUpphafsDagsBotaumsokn: req.body.HlutastarfUpphafsDagsBotaumsokn,
        HlutastarfKtFyrirtaekisBotaumsokn1: req.body.HlutastarfKtFyrirtaekisBotaumsokn1,
        HlutastarfNafnFyrirtaekisBotaumsokn1: req.body.HlutastarfNafnFyrirtaekisBotaumsokn1,
        HlutastarfHlutfallBotaumsokn1: req.body.HlutastarfHlutfallBotaumsokn1,
        HlutastarfUpphaedBotaumsokn1: req.body.HlutastarfUpphaedBotaumsokn1,
        HlutastarfUpphafsDagsBotaumsokn1: req.body.HlutastarfUpphafsDagsBotaumsokn1,
        numTekjurAfHlutastarfiBotaumsokn: req.body.numTekjurAfHlutastarfiBotaumsokn,
        Fjarmalstekjur: req.body.Fjarmalstekjur,
        ErINami: req.body.ErINami,
        NamSidOnn: req.body.NamSidOnn,
        NamLokidProf: req.body.NamLokidProf,
        NamSkradurNaest: req.body.NamSkradurNaest,
        AnnadUpplysingar: req.body.AnnadUpplysingar,

    })

    try{
        const a1 = await umsokn.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

/**
 * @swagger
 * /umsoknir/{Kennitala}:
 *   put:
 *     description: Breyta umsókn einstaklings
 *     responses:
 *       200:
 *         description: Breyta umsókn einstaklings
 */
router.put('/:Kennitala', async(req,res) => {
    try{
        const umsoknir  = await Umsoknir.findOne({ Kennitala: req.params.Kennitala })
        if (!umsoknir) return res.status(404).json(['Umsókn fannst ekki fyrir þessa kennitölu.']);

        for (let key in req.body) {
            if (umsoknir[key] && umsoknir[key] !== req.body[key]) // 
                umsoknir[key] = req.body[key];
        }
        const u1 = await umsoknir.save()
        res.json(u1)
        
    }catch(err){
        res.json(err.message)
    }
})


/**
 * @swagger
 * /umsoknir/{Kennitala}:
 *   delete:
 *     description: Eyða umsókn einstaklings
 *     responses:
 *       200:
 *         description: Eyða umsókn einstaklings
 */
 router.delete('/:Kennitala', async(req,res) => {
   return false
})


module.exports = router

