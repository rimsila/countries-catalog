// generated file

export type CountriesCatalog = CountriesCatalogItem[];
export interface CountriesCatalogItem {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  cioc?: string;
  borders?: string[];
  gini?: Gini;
  fifa?: string;
  postalCode?: PostalCode;
}
interface Name {
  common: string;
  official: string;
  nativeName?: NativeName;
}
interface NativeName {
  nld?: Nld;
  pap?: Pap;
  zho?: Zho;
  eng?: Eng;
  ell?: Ell;
  tur?: Tur;
  por?: Por;
  pov?: Pov;
  lao?: Lao;
  sqi?: Sqi;
  ara?: Ara;
  ita?: Ita;
  lat?: Lat;
  spa?: Spa;
  fra?: Fra;
  jpn?: Jpn;
  sag?: Sag;
  dan?: Dan;
  rus?: Rus;
  tet?: Tet;
  mri?: Mri;
  nzs?: Nzs;
  nya?: Nya;
  aze?: Aze;
  srp?: Srp;
  mon?: Mon;
  bar?: Bar;
  smo?: Smo;
  dzo?: Dzo;
  kon?: Kon;
  lin?: Lin;
  fij?: Fij;
  hif?: Hif;
  grn?: Grn;
  swe?: Swe;
  tir?: Tir;
  nfr?: Nfr;
  ind?: Ind;
  ben?: Ben;
  nor?: Nor;
  swa?: Swa;
  mlg?: Mlg;
  rar?: Rar;
  mkd?: Mkd;
  nrf?: Nrf;
  uzb?: Uzb;
  mlt?: Mlt;
  kat?: Kat;
  div?: Div;
  cal?: Cal;
  cha?: Cha;
  kir?: Kir;
  mah?: Mah;
  aym?: Aym;
  que?: Que;
  nno?: Nno;
  nob?: Nob;
  smi?: Smi;
  nau?: Nau;
  hrv?: Hrv;
  hmo?: Hmo;
  tpi?: Tpi;
  gle?: Gle;
  hye?: Hye;
  kal?: Kal;
  heb?: Heb;
  msa?: Msa;
  hun?: Hun;
  glv?: Glv;
  ukr?: Ukr;
  tsn?: Tsn;
  deu?: Deu;
  ton?: Ton;
  tha?: Tha;
  ssw?: Ssw;
  pol?: Pol;
  tkl?: Tkl;
  pih?: Pih;
  cat?: Cat;
  fil?: Fil;
  slk?: Slk;
  afr?: Afr;
  nbl?: Nbl;
  nso?: Nso;
  sot?: Sot;
  tso?: Tso;
  ven?: Ven;
  xho?: Xho;
  zul?: Zul;
  kin?: Kin;
  kaz?: Kaz;
  fao?: Fao;
  hin?: Hin;
  tam?: Tam;
  isl?: Isl;
  arc?: Arc;
  ckb?: Ckb;
  ber?: Ber;
  fin?: Fin;
  slv?: Slv;
  bul?: Bul;
  jam?: Jam;
  zdj?: Zdj;
  amh?: Amh;
  est?: Est;
  vie?: Vie;
  cnr?: Cnr;
  kor?: Kor;
  ltz?: Ltz;
  tuk?: Tuk;
  pau?: Pau;
  mey?: Mey;
  lav?: Lav;
  fas?: Fas;
  mfe?: Mfe;
  crs?: Crs;
  prs?: Prs;
  pus?: Pus;
  urd?: Urd;
  lit?: Lit;
  lua?: Lua;
  tvl?: Tvl;
  bwg?: Bwg;
  kck?: Kck;
  khi?: Khi;
  ndc?: Ndc;
  nde?: Nde;
  sna?: Sna;
  toi?: Toi;
  zib?: Zib;
  bos?: Bos;
  tgk?: Tgk;
  niu?: Niu;
  ron?: Ron;
  som?: Som;
  mya?: Mya;
  ces?: Ces;
  bel?: Bel;
  nep?: Nep;
  khm?: Khm;
  run?: Run;
  sin?: Sin;
  her?: Her;
  hgm?: Hgm;
  kwn?: Kwn;
  loz?: Loz;
  ndo?: Ndo;
  gsw?: Gsw;
  roh?: Roh;
  gil?: Gil;
  hat?: Hat;
  bis?: Bis;
  bjz?: Bjz;
}
interface Nld {
  official: string;
  common: string;
}
interface Pap {
  official: string;
  common: string;
}
interface Currencies {
  USD?: USD;
  CNY?: CNY;
  EUR?: EUR;
  XOF?: XOF;
  STN?: STN;
  LAK?: LAK;
  ALL?: ALL;
  SDG?: SDG;
  OMR?: OMR;
  NGN?: NGN;
  EGP?: EGP;
  CLP?: CLP;
  CVE?: CVE;
  JPY?: JPY;
  XAF?: XAF;
  DJF?: DJF;
  DKK?: DKK;
  RUB?: RUB;
  ANG?: ANG;
  NZD?: NZD;
  MWK?: MWK;
  AZN?: AZN;
  BBD?: BBD;
  MNT?: MNT;
  GBP?: GBP;
  SHP?: SHP;
  SAR?: SAR;
  WST?: WST;
  BTN?: BTN;
  INR?: INR;
  FJD?: FJD;
  PYG?: PYG;
  SRD?: SRD;
  MOP?: MOP;
  AUD?: AUD;
  ERN?: ERN;
  GGP?: GGP;
  VES?: VES;
  SLL?: SLL;
  LYD?: LYD;
  IDR?: IDR;
  BDT?: BDT;
  NOK?: NOK;
  TZS?: TZS;
  MGA?: MGA;
  CKD?: CKD;
  SEK?: SEK;
  HNL?: HNL;
  PAB?: PAB;
  AWG?: AWG;
  MKD?: MKD;
  AOA?: AOA;
  JEP?: JEP;
  XCD?: XCD;
  ILS?: ILS;
  JOD?: JOD;
  UZS?: UZS;
  FKP?: FKP;
  LBP?: LBP;
  GEL?: GEL;
  MVR?: MVR;
  KGS?: KGS;
  PEN?: PEN;
  AED?: AED;
  UGX?: UGX;
  UYU?: UYU;
  KWD?: KWD;
  PGK?: PGK;
  AMD?: AMD;
  BND?: BND;
  SGD?: SGD;
  HUF?: HUF;
  IMP?: IMP;
  UAH?: UAH;
  BWP?: BWP;
  TOP?: TOP;
  THB?: THB;
  CUC?: CUC;
  CUP?: CUP;
  ZMW?: ZMW;
  KES?: KES;
  SZL?: SZL;
  ZAR?: ZAR;
  XPF?: XPF;
  SSP?: SSP;
  PLN?: PLN;
  NIO?: NIO;
  GTQ?: GTQ;
  BOB?: BOB;
  GHS?: GHS;
  MZN?: MZN;
  DOP?: DOP;
  GIP?: GIP;
  QAR?: QAR;
  PHP?: PHP;
  ARS?: ARS;
  RWF?: RWF;
  KZT?: KZT;
  MYR?: MYR;
  LSL?: LSL;
  FOK?: FOK;
  CAD?: CAD;
  SYP?: SYP;
  ISK?: ISK;
  IQD?: IQD;
  MAD?: MAD;
  BSD?: BSD;
  BGN?: BGN;
  JMD?: JMD;
  BHD?: BHD;
  KMF?: KMF;
  BRL?: BRL;
  ETB?: ETB;
  CHF?: CHF;
  GMD?: GMD;
  VND?: VND;
  BMD?: BMD;
  KYD?: KYD;
  KPW?: KPW;
  TMT?: TMT;
  TND?: TND;
  DZD?: DZD;
  MRU?: MRU;
  IRR?: IRR;
  MUR?: MUR;
  TTD?: TTD;
  KRW?: KRW;
  TWD?: TWD;
  SCR?: SCR;
  RSD?: RSD;
  AFN?: AFN;
  COP?: COP;
  PKR?: PKR;
  HKD?: HKD;
  CDF?: CDF;
  TVD?: TVD;
  ZWL?: ZWL;
  BAM?: BAM;
  TJS?: TJS;
  MDL?: MDL;
  SOS?: SOS;
  MMK?: MMK;
  CZK?: CZK;
  RON?: RON;
  TRY?: TRY;
  BYN?: BYN;
  NPR?: NPR;
  GYD?: GYD;
  KHR?: KHR;
  MXN?: MXN;
  BIF?: BIF;
  LKR?: LKR;
  NAD?: NAD;
  YER?: YER;
  GNF?: GNF;
  KID?: KID;
  CRC?: CRC;
  HTG?: HTG;
  VUV?: VUV;
  SBD?: SBD;
  BZD?: BZD;
  LRD?: LRD;
}
interface USD {
  name: string;
  symbol: string;
}
interface Idd {
  root?: string;
  suffixes?: string[];
}
interface Languages {
  eng?: string;
  nld?: string;
  pap?: string;
  zho?: string;
  ell?: string;
  tur?: string;
  por?: string;
  pov?: string;
  lao?: string;
  sqi?: string;
  ara?: string;
  ita?: string;
  lat?: string;
  spa?: string;
  fra?: string;
  jpn?: string;
  sag?: string;
  dan?: string;
  rus?: string;
  tet?: string;
  mri?: string;
  nzs?: string;
  nya?: string;
  aze?: string;
  srp?: string;
  mon?: string;
  de?: string;
  smo?: string;
  dzo?: string;
  kon?: string;
  lin?: string;
  fij?: string;
  hif?: string;
  grn?: string;
  swe?: string;
  tir?: string;
  nfr?: string;
  ind?: string;
  ben?: string;
  nor?: string;
  swa?: string;
  mlg?: string;
  rar?: string;
  mkd?: string;
  nrf?: string;
  uzb?: string;
  mlt?: string;
  kat?: string;
  div?: string;
  cal?: string;
  cha?: string;
  kir?: string;
  mah?: string;
  aym?: string;
  que?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  nau?: string;
  hrv?: string;
  hmo?: string;
  tpi?: string;
  gle?: string;
  hye?: string;
  kal?: string;
  heb?: string;
  msa?: string;
  hun?: string;
  glv?: string;
  ukr?: string;
  tsn?: string;
  deu?: string;
  ton?: string;
  tha?: string;
  ssw?: string;
  pol?: string;
  tkl?: string;
  pih?: string;
  cat?: string;
  fil?: string;
  slk?: string;
  afr?: string;
  nbl?: string;
  nso?: string;
  sot?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zul?: string;
  kin?: string;
  kaz?: string;
  fao?: string;
  hin?: string;
  tam?: string;
  isl?: string;
  arc?: string;
  ckb?: string;
  ber?: string;
  fin?: string;
  slv?: string;
  bul?: string;
  jam?: string;
  zdj?: string;
  amh?: string;
  est?: string;
  vie?: string;
  cnr?: string;
  kor?: string;
  ltz?: string;
  tuk?: string;
  pau?: string;
  mey?: string;
  lav?: string;
  fas?: string;
  mfe?: string;
  crs?: string;
  prs?: string;
  pus?: string;
  urd?: string;
  lit?: string;
  lua?: string;
  tvl?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  sna?: string;
  toi?: string;
  zib?: string;
  bos?: string;
  tgk?: string;
  niu?: string;
  ron?: string;
  som?: string;
  mya?: string;
  ces?: string;
  bel?: string;
  nep?: string;
  khm?: string;
  run?: string;
  sin?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  gsw?: string;
  roh?: string;
  gil?: string;
  hat?: string;
  bis?: string;
  bjz?: string;
}
interface Translations {
  ara: Ara;
  bre: Bre;
  ces: Ces;
  cym: Cym;
  deu: Deu;
  est: Est;
  fin: Fin;
  fra: Fra;
  hrv?: Hrv;
  hun: Hun;
  ita: Ita;
  jpn?: Jpn;
  kor: Kor;
  nld: Nld;
  per?: Per;
  pol: Pol;
  por: Por;
  rus: Rus;
  slk: Slk;
  spa: Spa;
  srp: Srp;
  swe: Swe;
  tur: Tur;
  urd: Urd;
  zho?: Zho;
}
interface Ara {
  official: string;
  common: string;
}
interface Bre {
  official: string;
  common: string;
}
interface Ces {
  official: string;
  common: string;
}
interface Cym {
  official: string;
  common: string;
}
interface Deu {
  official: string;
  common: string;
}
interface Est {
  official: string;
  common: string;
}
interface Fin {
  official: string;
  common: string;
}
interface Fra {
  official?: string;
  common?: string;
  f?: string;
  m?: string;
}
interface Hrv {
  official: string;
  common: string;
}
interface Hun {
  official: string;
  common: string;
}
interface Ita {
  official: string;
  common: string;
}
interface Jpn {
  official: string;
  common: string;
}
interface Kor {
  official: string;
  common: string;
}
interface Per {
  official: string;
  common: string;
}
interface Pol {
  official: string;
  common: string;
}
interface Por {
  official: string;
  common: string;
}
interface Rus {
  official: string;
  common: string;
}
interface Slk {
  official: string;
  common: string;
}
interface Spa {
  official: string;
  common: string;
}
interface Srp {
  official: string;
  common: string;
}
interface Swe {
  official: string;
  common: string;
}
interface Tur {
  official: string;
  common: string;
}
interface Urd {
  official: string;
  common: string;
}
interface Zho {
  official: string;
  common: string;
}
interface Demonyms {
  eng: Eng;
  fra?: Fra;
}
interface Eng {
  f?: string;
  m?: string;
  official?: string;
  common?: string;
}
interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}
interface Car {
  signs?: string[];
  side: string;
}
interface Flags {
  png: string;
  svg: string;
  alt?: string;
}
interface CoatOfArms {
  png?: string;
  svg?: string;
}
interface CapitalInfo {
  latlng?: number[];
}
interface CNY {
  name: string;
  symbol: string;
}
interface Gini {
  2016?: number;
  2018?: number;
  2010?: number;
  2017?: number;
  2014?: number;
  2015?: number;
  2013?: number;
  2008?: number;
  2005?: number;
  2011?: number;
  2019?: number;
  1999?: number;
  2006?: number;
  2012?: number;
  2003?: number;
  2009?: number;
  2004?: number;
  1998?: number;
  1992?: number;
}
interface PostalCode {
  format: string;
  regex?: string;
}
interface Ell {
  official: string;
  common: string;
}
interface EUR {
  name: string;
  symbol: string;
}
interface Pov {
  official: string;
  common: string;
}
interface XOF {
  name: string;
  symbol: string;
}
interface STN {
  name: string;
  symbol: string;
}
interface Lao {
  official: string;
  common: string;
}
interface LAK {
  name: string;
  symbol: string;
}
interface Sqi {
  official: string;
  common: string;
}
interface ALL {
  name: string;
  symbol: string;
}
interface SDG {
  name: string;
}
interface OMR {
  name: string;
  symbol: string;
}
interface Lat {
  official: string;
  common: string;
}
interface NGN {
  name: string;
  symbol: string;
}
interface EGP {
  name: string;
  symbol: string;
}
interface CLP {
  name: string;
  symbol: string;
}
interface CVE {
  name: string;
  symbol: string;
}
interface JPY {
  name: string;
  symbol: string;
}
interface Sag {
  official: string;
  common: string;
}
interface XAF {
  name: string;
  symbol: string;
}
interface DJF {
  name: string;
  symbol: string;
}
interface Dan {
  official: string;
  common: string;
}
interface DKK {
  name: string;
  symbol: string;
}
interface RUB {
  name: string;
  symbol: string;
}
interface Tet {
  official: string;
  common: string;
}
interface ANG {
  name: string;
  symbol: string;
}
interface Mri {
  official: string;
  common: string;
}
interface Nzs {
  official: string;
  common: string;
}
interface NZD {
  name: string;
  symbol: string;
}
interface Nya {
  official: string;
  common: string;
}
interface MWK {
  name: string;
  symbol: string;
}
interface Aze {
  official: string;
  common: string;
}
interface AZN {
  name: string;
  symbol: string;
}
interface BBD {
  name: string;
  symbol: string;
}
interface Mon {
  official: string;
  common: string;
}
interface MNT {
  name: string;
  symbol: string;
}
interface GBP {
  name: string;
  symbol: string;
}
interface SHP {
  name: string;
  symbol: string;
}
interface Bar {
  official: string;
  common: string;
}
interface SAR {
  name: string;
  symbol: string;
}
interface Smo {
  official: string;
  common: string;
}
interface WST {
  name: string;
  symbol: string;
}
interface Dzo {
  official: string;
  common: string;
}
interface BTN {
  name: string;
  symbol: string;
}
interface INR {
  name: string;
  symbol: string;
}
interface Kon {
  official: string;
  common: string;
}
interface Lin {
  official: string;
  common: string;
}
interface Fij {
  official: string;
  common: string;
}
interface Hif {
  official: string;
  common: string;
}
interface FJD {
  name: string;
  symbol: string;
}
interface Grn {
  official: string;
  common: string;
}
interface PYG {
  name: string;
  symbol: string;
}
interface SRD {
  name: string;
  symbol: string;
}
interface MOP {
  name: string;
  symbol: string;
}
interface AUD {
  name: string;
  symbol: string;
}
interface Tir {
  official: string;
  common: string;
}
interface ERN {
  name: string;
  symbol: string;
}
interface Nfr {
  official: string;
  common: string;
}
interface GGP {
  name: string;
  symbol: string;
}
interface VES {
  name: string;
  symbol: string;
}
interface SLL {
  name: string;
  symbol: string;
}
interface LYD {
  name: string;
  symbol: string;
}
interface Ind {
  official: string;
  common: string;
}
interface IDR {
  name: string;
  symbol: string;
}
interface Ben {
  official: string;
  common: string;
}
interface BDT {
  name: string;
  symbol: string;
}
interface Nor {
  official: string;
  common: string;
}
interface NOK {
  name: string;
  symbol: string;
}
interface Swa {
  official: string;
  common: string;
}
interface TZS {
  name: string;
  symbol: string;
}
interface Mlg {
  official: string;
  common: string;
}
interface MGA {
  name: string;
  symbol: string;
}
interface Rar {
  official: string;
  common: string;
}
interface CKD {
  name: string;
  symbol: string;
}
interface SEK {
  name: string;
  symbol: string;
}
interface HNL {
  name: string;
  symbol: string;
}
interface PAB {
  name: string;
  symbol: string;
}
interface AWG {
  name: string;
  symbol: string;
}
interface Mkd {
  official: string;
  common: string;
}
interface MKD {
  name: string;
  symbol: string;
}
interface AOA {
  name: string;
  symbol: string;
}
interface Nrf {
  official: string;
  common: string;
}
interface JEP {
  name: string;
  symbol: string;
}
interface XCD {
  name: string;
  symbol: string;
}
interface ILS {
  name: string;
  symbol: string;
}
interface JOD {
  name: string;
  symbol: string;
}
interface Uzb {
  official: string;
  common: string;
}
interface UZS {
  name: string;
  symbol: string;
}
interface FKP {
  name: string;
  symbol: string;
}
interface Mlt {
  official: string;
  common: string;
}
interface LBP {
  name: string;
  symbol: string;
}
interface Kat {
  official: string;
  common: string;
}
interface GEL {
  name: string;
  symbol: string;
}
interface Div {
  official: string;
  common: string;
}
interface MVR {
  name: string;
  symbol: string;
}
interface Cal {
  official: string;
  common: string;
}
interface Cha {
  official: string;
  common: string;
}
interface Kir {
  official: string;
  common: string;
}
interface KGS {
  name: string;
  symbol: string;
}
interface Mah {
  official: string;
  common: string;
}
interface Aym {
  official: string;
  common: string;
}
interface Que {
  official: string;
  common: string;
}
interface PEN {
  name: string;
  symbol: string;
}
interface AED {
  name: string;
  symbol: string;
}
interface Nno {
  official: string;
  common: string;
}
interface Nob {
  official: string;
  common: string;
}
interface Smi {
  official: string;
  common: string;
}
interface Nau {
  official: string;
  common: string;
}
interface UGX {
  name: string;
  symbol: string;
}
interface UYU {
  name: string;
  symbol: string;
}
interface KWD {
  name: string;
  symbol: string;
}
interface Hmo {
  official: string;
  common: string;
}
interface Tpi {
  official: string;
  common: string;
}
interface PGK {
  name: string;
  symbol: string;
}
interface Gle {
  official: string;
  common: string;
}
interface Hye {
  official: string;
  common: string;
}
interface AMD {
  name: string;
  symbol: string;
}
interface Kal {
  official: string;
  common: string;
}
interface Heb {
  official: string;
  common: string;
}
interface Msa {
  official: string;
  common: string;
}
interface BND {
  name: string;
  symbol: string;
}
interface SGD {
  name: string;
  symbol: string;
}
interface HUF {
  name: string;
  symbol: string;
}
interface Glv {
  official: string;
  common: string;
}
interface IMP {
  name: string;
  symbol: string;
}
interface Ukr {
  official: string;
  common: string;
}
interface UAH {
  name: string;
  symbol: string;
}
interface Tsn {
  official: string;
  common: string;
}
interface BWP {
  name: string;
  symbol: string;
}
interface Ton {
  official: string;
  common: string;
}
interface TOP {
  name: string;
  symbol: string;
}
interface Tha {
  official: string;
  common: string;
}
interface THB {
  name: string;
  symbol: string;
}
interface CUC {
  name: string;
  symbol: string;
}
interface CUP {
  name: string;
  symbol: string;
}
interface ZMW {
  name: string;
  symbol: string;
}
interface KES {
  name: string;
  symbol: string;
}
interface Ssw {
  official: string;
  common: string;
}
interface SZL {
  name: string;
  symbol: string;
}
interface ZAR {
  name: string;
  symbol: string;
}
interface XPF {
  name: string;
  symbol: string;
}
interface SSP {
  name: string;
  symbol: string;
}
interface PLN {
  name: string;
  symbol: string;
}
interface NIO {
  name: string;
  symbol: string;
}
interface Tkl {
  official: string;
  common: string;
}
interface GTQ {
  name: string;
  symbol: string;
}
interface BOB {
  name: string;
  symbol: string;
}
interface Pih {
  official: string;
  common: string;
}
interface GHS {
  name: string;
  symbol: string;
}
interface Cat {
  official: string;
  common: string;
}
interface MZN {
  name: string;
  symbol: string;
}
interface DOP {
  name: string;
  symbol: string;
}
interface GIP {
  name: string;
  symbol: string;
}
interface QAR {
  name: string;
  symbol: string;
}
interface Fil {
  official: string;
  common: string;
}
interface PHP {
  name: string;
  symbol: string;
}
interface ARS {
  name: string;
  symbol: string;
}
interface Afr {
  official: string;
  common: string;
}
interface Nbl {
  official: string;
  common: string;
}
interface Nso {
  official: string;
  common: string;
}
interface Sot {
  official: string;
  common: string;
}
interface Tso {
  official: string;
  common: string;
}
interface Ven {
  official: string;
  common: string;
}
interface Xho {
  official: string;
  common: string;
}
interface Zul {
  official: string;
  common: string;
}
interface Kin {
  official: string;
  common: string;
}
interface RWF {
  name: string;
  symbol: string;
}
interface Kaz {
  official: string;
  common: string;
}
interface KZT {
  name: string;
  symbol: string;
}
interface MYR {
  name: string;
  symbol: string;
}
interface LSL {
  name: string;
  symbol: string;
}
interface Fao {
  official: string;
  common: string;
}
interface FOK {
  name: string;
  symbol: string;
}
interface CAD {
  name: string;
  symbol: string;
}
interface Hin {
  official: string;
  common: string;
}
interface Tam {
  official: string;
  common: string;
}
interface SYP {
  name: string;
  symbol: string;
}
interface Isl {
  official: string;
  common: string;
}
interface ISK {
  name: string;
  symbol: string;
}
interface Arc {
  official: string;
  common: string;
}
interface Ckb {
  official: string;
  common: string;
}
interface IQD {
  name: string;
  symbol: string;
}
interface Ber {
  official: string;
  common: string;
}
interface MAD {
  name: string;
  symbol: string;
}
interface BSD {
  name: string;
  symbol: string;
}
interface Slv {
  official: string;
  common: string;
}
interface Bul {
  official: string;
  common: string;
}
interface BGN {
  name: string;
  symbol: string;
}
interface Jam {
  official: string;
  common: string;
}
interface JMD {
  name: string;
  symbol: string;
}
interface BHD {
  name: string;
  symbol: string;
}
interface Zdj {
  official: string;
  common: string;
}
interface KMF {
  name: string;
  symbol: string;
}
interface BRL {
  name: string;
  symbol: string;
}
interface Amh {
  official: string;
  common: string;
}
interface ETB {
  name: string;
  symbol: string;
}
interface CHF {
  name: string;
  symbol: string;
}
interface GMD {
  name: string;
  symbol: string;
}
interface Vie {
  official: string;
  common: string;
}
interface VND {
  name: string;
  symbol: string;
}
interface BMD {
  name: string;
  symbol: string;
}
interface Cnr {
  official: string;
  common: string;
}
interface KYD {
  name: string;
  symbol: string;
}
interface KPW {
  name: string;
  symbol: string;
}
interface Ltz {
  official: string;
  common: string;
}
interface Tuk {
  official: string;
  common: string;
}
interface TMT {
  name: string;
  symbol: string;
}
interface Pau {
  official: string;
  common: string;
}
interface TND {
  name: string;
  symbol: string;
}
interface Mey {
  official: string;
  common: string;
}
interface DZD {
  name: string;
  symbol: string;
}
interface MRU {
  name: string;
  symbol: string;
}
interface Lav {
  official: string;
  common: string;
}
interface Fas {
  official: string;
  common: string;
}
interface IRR {
  name: string;
  symbol: string;
}
interface Mfe {
  official: string;
  common: string;
}
interface MUR {
  name: string;
  symbol: string;
}
interface TTD {
  name: string;
  symbol: string;
}
interface KRW {
  name: string;
  symbol: string;
}
interface TWD {
  name: string;
  symbol: string;
}
interface Crs {
  official: string;
  common: string;
}
interface SCR {
  name: string;
  symbol: string;
}
interface RSD {
  name: string;
  symbol: string;
}
interface Prs {
  official: string;
  common: string;
}
interface Pus {
  official: string;
  common: string;
}
interface AFN {
  name: string;
  symbol: string;
}
interface COP {
  name: string;
  symbol: string;
}
interface PKR {
  name: string;
  symbol: string;
}
interface Lit {
  official: string;
  common: string;
}
interface HKD {
  name: string;
  symbol: string;
}
interface Lua {
  official: string;
  common: string;
}
interface CDF {
  name: string;
  symbol: string;
}
interface Tvl {
  official: string;
  common: string;
}
interface TVD {
  name: string;
  symbol: string;
}
interface Bwg {
  official: string;
  common: string;
}
interface Kck {
  official: string;
  common: string;
}
interface Khi {
  official: string;
  common: string;
}
interface Ndc {
  official: string;
  common: string;
}
interface Nde {
  official: string;
  common: string;
}
interface Sna {
  official: string;
  common: string;
}
interface Toi {
  official: string;
  common: string;
}
interface Zib {
  official: string;
  common: string;
}
interface ZWL {
  name: string;
  symbol: string;
}
interface Bos {
  official: string;
  common: string;
}
interface BAM {
  name: string;
}
interface Tgk {
  official: string;
  common: string;
}
interface TJS {
  name: string;
  symbol: string;
}
interface Niu {
  official: string;
  common: string;
}
interface Ron {
  official: string;
  common: string;
}
interface MDL {
  name: string;
  symbol: string;
}
interface Som {
  official: string;
  common: string;
}
interface SOS {
  name: string;
  symbol: string;
}
interface Mya {
  official: string;
  common: string;
}
interface MMK {
  name: string;
  symbol: string;
}
interface CZK {
  name: string;
  symbol: string;
}
interface RON {
  name: string;
  symbol: string;
}
interface TRY {
  name: string;
  symbol: string;
}
interface Bel {
  official: string;
  common: string;
}
interface BYN {
  name: string;
  symbol: string;
}
interface Nep {
  official: string;
  common: string;
}
interface NPR {
  name: string;
  symbol: string;
}
interface GYD {
  name: string;
  symbol: string;
}
interface Khm {
  official: string;
  common: string;
}
interface KHR {
  name: string;
  symbol: string;
}
interface MXN {
  name: string;
  symbol: string;
}
interface Run {
  official: string;
  common: string;
}
interface BIF {
  name: string;
  symbol: string;
}
interface Sin {
  official: string;
  common: string;
}
interface LKR {
  name: string;
  symbol: string;
}
interface Her {
  official: string;
  common: string;
}
interface Hgm {
  official: string;
  common: string;
}
interface Kwn {
  official: string;
  common: string;
}
interface Loz {
  official: string;
  common: string;
}
interface Ndo {
  official: string;
  common: string;
}
interface NAD {
  name: string;
  symbol: string;
}
interface YER {
  name: string;
  symbol: string;
}
interface GNF {
  name: string;
  symbol: string;
}
interface Gsw {
  official: string;
  common: string;
}
interface Roh {
  official: string;
  common: string;
}
interface Gil {
  official: string;
  common: string;
}
interface KID {
  name: string;
  symbol: string;
}
interface CRC {
  name: string;
  symbol: string;
}
interface Hat {
  official: string;
  common: string;
}
interface HTG {
  name: string;
  symbol: string;
}
interface Bis {
  official: string;
  common: string;
}
interface VUV {
  name: string;
  symbol: string;
}
interface SBD {
  name: string;
  symbol: string;
}
interface Bjz {
  official: string;
  common: string;
}
interface BZD {
  name: string;
  symbol: string;
}
interface LRD {
  name: string;
  symbol: string;
}
