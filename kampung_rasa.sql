PGDMP     8                    |            kampung_rasa    15.4    15.3 h    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    41816    kampung_rasa    DATABASE     n   CREATE DATABASE kampung_rasa WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE kampung_rasa;
                postgres    false            �            1259    41850    customer    TABLE     �   CREATE TABLE public.customer (
    "idCustomer" integer NOT NULL,
    "namaCustomer" text NOT NULL,
    "kontakCustomer" text NOT NULL
);
    DROP TABLE public.customer;
       public         heap    postgres    false            �            1259    41849    customer_idCustomer_seq    SEQUENCE     �   CREATE SEQUENCE public."customer_idCustomer_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."customer_idCustomer_seq";
       public          postgres    false    223            �           0    0    customer_idCustomer_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."customer_idCustomer_seq" OWNED BY public.customer."idCustomer";
          public          postgres    false    222            �            1259    41859    detailPesanan    TABLE     �   CREATE TABLE public."detailPesanan" (
    "idDetailPesanan" integer NOT NULL,
    "idPesanan" integer,
    "idMenu" integer,
    quantity integer
);
 #   DROP TABLE public."detailPesanan";
       public         heap    postgres    false            �            1259    41858 !   detailPesanan_idDetailPesanan_seq    SEQUENCE     �   CREATE SEQUENCE public."detailPesanan_idDetailPesanan_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."detailPesanan_idDetailPesanan_seq";
       public          postgres    false    225            �           0    0 !   detailPesanan_idDetailPesanan_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public."detailPesanan_idDetailPesanan_seq" OWNED BY public."detailPesanan"."idDetailPesanan";
          public          postgres    false    224            �            1259    41843    kategori_menu    TABLE     �   CREATE TABLE public.kategori_menu (
    "idKategoriMenu" integer NOT NULL,
    "kategoriMenu" character varying(100) NOT NULL
);
 !   DROP TABLE public.kategori_menu;
       public         heap    postgres    false            �            1259    41842     kategori_menu_idKategoriMenu_seq    SEQUENCE     �   CREATE SEQUENCE public."kategori_menu_idKategoriMenu_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public."kategori_menu_idKategoriMenu_seq";
       public          postgres    false    221            �           0    0     kategori_menu_idKategoriMenu_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public."kategori_menu_idKategoriMenu_seq" OWNED BY public.kategori_menu."idKategoriMenu";
          public          postgres    false    220            �            1259    41818    knex_migrations    TABLE     �   CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);
 #   DROP TABLE public.knex_migrations;
       public         heap    postgres    false            �            1259    41817    knex_migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.knex_migrations_id_seq;
       public          postgres    false    215            �           0    0    knex_migrations_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;
          public          postgres    false    214            �            1259    41825    knex_migrations_lock    TABLE     `   CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);
 (   DROP TABLE public.knex_migrations_lock;
       public         heap    postgres    false            �            1259    41824    knex_migrations_lock_index_seq    SEQUENCE     �   CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.knex_migrations_lock_index_seq;
       public          postgres    false    217            �           0    0    knex_migrations_lock_index_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;
          public          postgres    false    216            �            1259    41832    menu    TABLE     �   CREATE TABLE public.menu (
    "idMenu" integer NOT NULL,
    "namaMenu" character varying(255) NOT NULL,
    harga integer NOT NULL,
    gambar character varying(255) NOT NULL,
    "idKategoriMenu" integer NOT NULL,
    "idStaf" integer NOT NULL
);
    DROP TABLE public.menu;
       public         heap    postgres    false            �            1259    41831    menu_idMenu_seq    SEQUENCE     �   CREATE SEQUENCE public."menu_idMenu_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."menu_idMenu_seq";
       public          postgres    false    219            �           0    0    menu_idMenu_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."menu_idMenu_seq" OWNED BY public.menu."idMenu";
          public          postgres    false    218            �            1259    41967    orderDetails    TABLE     n  CREATE TABLE public."orderDetails" (
    "idDetail" integer NOT NULL,
    "idOrder" integer NOT NULL,
    "idMenu" integer NOT NULL,
    "namaMenu" character varying(255) NOT NULL,
    quantity integer NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
 "   DROP TABLE public."orderDetails";
       public         heap    postgres    false            �            1259    41966    orderDetails_idDetail_seq    SEQUENCE     �   CREATE SEQUENCE public."orderDetails_idDetail_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."orderDetails_idDetail_seq";
       public          postgres    false    237            �           0    0    orderDetails_idDetail_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."orderDetails_idDetail_seq" OWNED BY public."orderDetails"."idDetail";
          public          postgres    false    236            �            1259    41953    orders    TABLE     s  CREATE TABLE public.orders (
    "idOrder" integer NOT NULL,
    "idCustomer" integer NOT NULL,
    "idTable" integer NOT NULL,
    "totalPrice" integer NOT NULL,
    "waktuPesanan" timestamp with time zone NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    41952    orders_idOrder_seq    SEQUENCE     �   CREATE SEQUENCE public."orders_idOrder_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."orders_idOrder_seq";
       public          postgres    false    235            �           0    0    orders_idOrder_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."orders_idOrder_seq" OWNED BY public.orders."idOrder";
          public          postgres    false    234            �            1259    41885    pengeluaran    TABLE     �   CREATE TABLE public.pengeluaran (
    "idPengeluaran" integer NOT NULL,
    "namaPengeluaran" character varying(255) NOT NULL,
    "jumlahPengeluaran" integer NOT NULL,
    "tanggalPengeluaran" date NOT NULL,
    keterangan text
);
    DROP TABLE public.pengeluaran;
       public         heap    postgres    false            �            1259    41884    pengeluaran_idPengeluaran_seq    SEQUENCE     �   CREATE SEQUENCE public."pengeluaran_idPengeluaran_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."pengeluaran_idPengeluaran_seq";
       public          postgres    false    231            �           0    0    pengeluaran_idPengeluaran_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."pengeluaran_idPengeluaran_seq" OWNED BY public.pengeluaran."idPengeluaran";
          public          postgres    false    230            �            1259    41868    pesanan    TABLE     �   CREATE TABLE public.pesanan (
    "idPesanan" integer NOT NULL,
    "idCustomer" integer,
    "waktuPesanan" timestamp with time zone,
    "totalPrice" integer
);
    DROP TABLE public.pesanan;
       public         heap    postgres    false            �            1259    41867    pesanan_idPesanan_seq    SEQUENCE     �   CREATE SEQUENCE public."pesanan_idPesanan_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."pesanan_idPesanan_seq";
       public          postgres    false    227            �           0    0    pesanan_idPesanan_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."pesanan_idPesanan_seq" OWNED BY public.pesanan."idPesanan";
          public          postgres    false    226            �            1259    41988 	   reservasi    TABLE     &  CREATE TABLE public.reservasi (
    "idReservasi" integer NOT NULL,
    "namaCustomer" character varying(255) NOT NULL,
    "jumlahOrang" integer NOT NULL,
    tempat character varying(255) NOT NULL,
    "jenisReservasi" character varying(255) NOT NULL,
    "tanggalReservasi" date NOT NULL
);
    DROP TABLE public.reservasi;
       public         heap    postgres    false            �            1259    41987    reservasi_idReservasi_seq    SEQUENCE     �   CREATE SEQUENCE public."reservasi_idReservasi_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."reservasi_idReservasi_seq";
       public          postgres    false    239            �           0    0    reservasi_idReservasi_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."reservasi_idReservasi_seq" OWNED BY public.reservasi."idReservasi";
          public          postgres    false    238            �            1259    41894    staf    TABLE     �   CREATE TABLE public.staf (
    id_staf integer NOT NULL,
    username character varying(255) NOT NULL,
    "kontakStaf" character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);
    DROP TABLE public.staf;
       public         heap    postgres    false            �            1259    41893    staf_id_staf_seq    SEQUENCE     �   CREATE SEQUENCE public.staf_id_staf_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.staf_id_staf_seq;
       public          postgres    false    233            �           0    0    staf_id_staf_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.staf_id_staf_seq OWNED BY public.staf.id_staf;
          public          postgres    false    232            �            1259    41876    tables    TABLE     �   CREATE TABLE public.tables (
    "idTable" integer NOT NULL,
    "jenisEvent" character varying(255),
    "namaMeja" character varying(255)
);
    DROP TABLE public.tables;
       public         heap    postgres    false            �            1259    41875    tables_idTable_seq    SEQUENCE     �   CREATE SEQUENCE public."tables_idTable_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."tables_idTable_seq";
       public          postgres    false    229            �           0    0    tables_idTable_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."tables_idTable_seq" OWNED BY public.tables."idTable";
          public          postgres    false    228            �           2604    41853    customer idCustomer    DEFAULT     ~   ALTER TABLE ONLY public.customer ALTER COLUMN "idCustomer" SET DEFAULT nextval('public."customer_idCustomer_seq"'::regclass);
 D   ALTER TABLE public.customer ALTER COLUMN "idCustomer" DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    41862    detailPesanan idDetailPesanan    DEFAULT     �   ALTER TABLE ONLY public."detailPesanan" ALTER COLUMN "idDetailPesanan" SET DEFAULT nextval('public."detailPesanan_idDetailPesanan_seq"'::regclass);
 P   ALTER TABLE public."detailPesanan" ALTER COLUMN "idDetailPesanan" DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    41846    kategori_menu idKategoriMenu    DEFAULT     �   ALTER TABLE ONLY public.kategori_menu ALTER COLUMN "idKategoriMenu" SET DEFAULT nextval('public."kategori_menu_idKategoriMenu_seq"'::regclass);
 M   ALTER TABLE public.kategori_menu ALTER COLUMN "idKategoriMenu" DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    41821    knex_migrations id    DEFAULT     x   ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);
 A   ALTER TABLE public.knex_migrations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    41828    knex_migrations_lock index    DEFAULT     �   ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);
 I   ALTER TABLE public.knex_migrations_lock ALTER COLUMN index DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    41835    menu idMenu    DEFAULT     n   ALTER TABLE ONLY public.menu ALTER COLUMN "idMenu" SET DEFAULT nextval('public."menu_idMenu_seq"'::regclass);
 <   ALTER TABLE public.menu ALTER COLUMN "idMenu" DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    41970    orderDetails idDetail    DEFAULT     �   ALTER TABLE ONLY public."orderDetails" ALTER COLUMN "idDetail" SET DEFAULT nextval('public."orderDetails_idDetail_seq"'::regclass);
 H   ALTER TABLE public."orderDetails" ALTER COLUMN "idDetail" DROP DEFAULT;
       public          postgres    false    237    236    237            �           2604    41956    orders idOrder    DEFAULT     t   ALTER TABLE ONLY public.orders ALTER COLUMN "idOrder" SET DEFAULT nextval('public."orders_idOrder_seq"'::regclass);
 ?   ALTER TABLE public.orders ALTER COLUMN "idOrder" DROP DEFAULT;
       public          postgres    false    234    235    235            �           2604    41888    pengeluaran idPengeluaran    DEFAULT     �   ALTER TABLE ONLY public.pengeluaran ALTER COLUMN "idPengeluaran" SET DEFAULT nextval('public."pengeluaran_idPengeluaran_seq"'::regclass);
 J   ALTER TABLE public.pengeluaran ALTER COLUMN "idPengeluaran" DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    41871    pesanan idPesanan    DEFAULT     z   ALTER TABLE ONLY public.pesanan ALTER COLUMN "idPesanan" SET DEFAULT nextval('public."pesanan_idPesanan_seq"'::regclass);
 B   ALTER TABLE public.pesanan ALTER COLUMN "idPesanan" DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    41991    reservasi idReservasi    DEFAULT     �   ALTER TABLE ONLY public.reservasi ALTER COLUMN "idReservasi" SET DEFAULT nextval('public."reservasi_idReservasi_seq"'::regclass);
 F   ALTER TABLE public.reservasi ALTER COLUMN "idReservasi" DROP DEFAULT;
       public          postgres    false    238    239    239            �           2604    41897    staf id_staf    DEFAULT     l   ALTER TABLE ONLY public.staf ALTER COLUMN id_staf SET DEFAULT nextval('public.staf_id_staf_seq'::regclass);
 ;   ALTER TABLE public.staf ALTER COLUMN id_staf DROP DEFAULT;
       public          postgres    false    233    232    233            �           2604    41879    tables idTable    DEFAULT     t   ALTER TABLE ONLY public.tables ALTER COLUMN "idTable" SET DEFAULT nextval('public."tables_idTable_seq"'::regclass);
 ?   ALTER TABLE public.tables ALTER COLUMN "idTable" DROP DEFAULT;
       public          postgres    false    228    229    229            v          0    41850    customer 
   TABLE DATA           R   COPY public.customer ("idCustomer", "namaCustomer", "kontakCustomer") FROM stdin;
    public          postgres    false    223   iz       x          0    41859    detailPesanan 
   TABLE DATA           ]   COPY public."detailPesanan" ("idDetailPesanan", "idPesanan", "idMenu", quantity) FROM stdin;
    public          postgres    false    225   {       t          0    41843    kategori_menu 
   TABLE DATA           I   COPY public.kategori_menu ("idKategoriMenu", "kategoriMenu") FROM stdin;
    public          postgres    false    221   U{       n          0    41818    knex_migrations 
   TABLE DATA           J   COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
    public          postgres    false    215   �{       p          0    41825    knex_migrations_lock 
   TABLE DATA           @   COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
    public          postgres    false    217   }       r          0    41832    menu 
   TABLE DATA           _   COPY public.menu ("idMenu", "namaMenu", harga, gambar, "idKategoriMenu", "idStaf") FROM stdin;
    public          postgres    false    219   ,}       �          0    41967    orderDetails 
   TABLE DATA           w   COPY public."orderDetails" ("idDetail", "idOrder", "idMenu", "namaMenu", quantity, created_at, updated_at) FROM stdin;
    public          postgres    false    237   ��       �          0    41953    orders 
   TABLE DATA           z   COPY public.orders ("idOrder", "idCustomer", "idTable", "totalPrice", "waktuPesanan", created_at, updated_at) FROM stdin;
    public          postgres    false    235   :�       ~          0    41885    pengeluaran 
   TABLE DATA           �   COPY public.pengeluaran ("idPengeluaran", "namaPengeluaran", "jumlahPengeluaran", "tanggalPengeluaran", keterangan) FROM stdin;
    public          postgres    false    231   ��       z          0    41868    pesanan 
   TABLE DATA           Z   COPY public.pesanan ("idPesanan", "idCustomer", "waktuPesanan", "totalPrice") FROM stdin;
    public          postgres    false    227   U�       �          0    41988 	   reservasi 
   TABLE DATA              COPY public.reservasi ("idReservasi", "namaCustomer", "jumlahOrang", tempat, "jenisReservasi", "tanggalReservasi") FROM stdin;
    public          postgres    false    239   �       �          0    41894    staf 
   TABLE DATA           I   COPY public.staf (id_staf, username, "kontakStaf", password) FROM stdin;
    public          postgres    false    233   8�       |          0    41876    tables 
   TABLE DATA           E   COPY public.tables ("idTable", "jenisEvent", "namaMeja") FROM stdin;
    public          postgres    false    229   ��       �           0    0    customer_idCustomer_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."customer_idCustomer_seq"', 264, true);
          public          postgres    false    222            �           0    0 !   detailPesanan_idDetailPesanan_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public."detailPesanan_idDetailPesanan_seq"', 57, true);
          public          postgres    false    224            �           0    0     kategori_menu_idKategoriMenu_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."kategori_menu_idKategoriMenu_seq"', 1, false);
          public          postgres    false    220            �           0    0    knex_migrations_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.knex_migrations_id_seq', 19, true);
          public          postgres    false    214            �           0    0    knex_migrations_lock_index_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);
          public          postgres    false    216            �           0    0    menu_idMenu_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."menu_idMenu_seq"', 1, false);
          public          postgres    false    218            �           0    0    orderDetails_idDetail_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."orderDetails_idDetail_seq"', 31, true);
          public          postgres    false    236            �           0    0    orders_idOrder_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."orders_idOrder_seq"', 14, true);
          public          postgres    false    234            �           0    0    pengeluaran_idPengeluaran_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."pengeluaran_idPengeluaran_seq"', 2, true);
          public          postgres    false    230            �           0    0    pesanan_idPesanan_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."pesanan_idPesanan_seq"', 32, true);
          public          postgres    false    226            �           0    0    reservasi_idReservasi_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."reservasi_idReservasi_seq"', 2, true);
          public          postgres    false    238            �           0    0    staf_id_staf_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.staf_id_staf_seq', 1, false);
          public          postgres    false    232            �           0    0    tables_idTable_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."tables_idTable_seq"', 1, false);
          public          postgres    false    228            �           2606    41857    customer customer_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY ("idCustomer");
 @   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_pkey;
       public            postgres    false    223            �           2606    41864     detailPesanan detailPesanan_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public."detailPesanan"
    ADD CONSTRAINT "detailPesanan_pkey" PRIMARY KEY ("idDetailPesanan");
 N   ALTER TABLE ONLY public."detailPesanan" DROP CONSTRAINT "detailPesanan_pkey";
       public            postgres    false    225            �           2606    41848     kategori_menu kategori_menu_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.kategori_menu
    ADD CONSTRAINT kategori_menu_pkey PRIMARY KEY ("idKategoriMenu");
 J   ALTER TABLE ONLY public.kategori_menu DROP CONSTRAINT kategori_menu_pkey;
       public            postgres    false    221            �           2606    41830 .   knex_migrations_lock knex_migrations_lock_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);
 X   ALTER TABLE ONLY public.knex_migrations_lock DROP CONSTRAINT knex_migrations_lock_pkey;
       public            postgres    false    217            �           2606    41823 $   knex_migrations knex_migrations_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.knex_migrations DROP CONSTRAINT knex_migrations_pkey;
       public            postgres    false    215            �           2606    41839    menu menu_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY ("idMenu");
 8   ALTER TABLE ONLY public.menu DROP CONSTRAINT menu_pkey;
       public            postgres    false    219            �           2606    41974    orderDetails orderDetails_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."orderDetails"
    ADD CONSTRAINT "orderDetails_pkey" PRIMARY KEY ("idDetail");
 L   ALTER TABLE ONLY public."orderDetails" DROP CONSTRAINT "orderDetails_pkey";
       public            postgres    false    237            �           2606    41960    orders orders_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("idOrder");
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    235            �           2606    41892    pengeluaran pengeluaran_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.pengeluaran
    ADD CONSTRAINT pengeluaran_pkey PRIMARY KEY ("idPengeluaran");
 F   ALTER TABLE ONLY public.pengeluaran DROP CONSTRAINT pengeluaran_pkey;
       public            postgres    false    231            �           2606    41873    pesanan pesanan_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.pesanan
    ADD CONSTRAINT pesanan_pkey PRIMARY KEY ("idPesanan");
 >   ALTER TABLE ONLY public.pesanan DROP CONSTRAINT pesanan_pkey;
       public            postgres    false    227            �           2606    41995    reservasi reservasi_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.reservasi
    ADD CONSTRAINT reservasi_pkey PRIMARY KEY ("idReservasi");
 B   ALTER TABLE ONLY public.reservasi DROP CONSTRAINT reservasi_pkey;
       public            postgres    false    239            �           2606    41901    staf staf_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.staf
    ADD CONSTRAINT staf_pkey PRIMARY KEY (id_staf);
 8   ALTER TABLE ONLY public.staf DROP CONSTRAINT staf_pkey;
       public            postgres    false    233            �           2606    41883    tables tables_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.tables
    ADD CONSTRAINT tables_pkey PRIMARY KEY ("idTable");
 <   ALTER TABLE ONLY public.tables DROP CONSTRAINT tables_pkey;
       public            postgres    false    229            �           1259    41866    detailpesanan_idmenu_index    INDEX     Z   CREATE INDEX detailpesanan_idmenu_index ON public."detailPesanan" USING btree ("idMenu");
 .   DROP INDEX public.detailpesanan_idmenu_index;
       public            postgres    false    225            �           1259    41865    detailpesanan_idpesanan_index    INDEX     `   CREATE INDEX detailpesanan_idpesanan_index ON public."detailPesanan" USING btree ("idPesanan");
 1   DROP INDEX public.detailpesanan_idpesanan_index;
       public            postgres    false    225            �           1259    41840    menu_idkategorimenu_index    INDEX     V   CREATE INDEX menu_idkategorimenu_index ON public.menu USING btree ("idKategoriMenu");
 -   DROP INDEX public.menu_idkategorimenu_index;
       public            postgres    false    219            �           1259    41841    menu_idstaf_index    INDEX     F   CREATE INDEX menu_idstaf_index ON public.menu USING btree ("idStaf");
 %   DROP INDEX public.menu_idstaf_index;
       public            postgres    false    219            �           1259    41874    pesanan_idcustomer_index    INDEX     T   CREATE INDEX pesanan_idcustomer_index ON public.pesanan USING btree ("idCustomer");
 ,   DROP INDEX public.pesanan_idcustomer_index;
       public            postgres    false    227            �           1259    41902    staf_username_index    INDEX     H   CREATE INDEX staf_username_index ON public.staf USING btree (username);
 '   DROP INDEX public.staf_username_index;
       public            postgres    false    233            �           2606    41980 (   orderDetails orderdetails_idmenu_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public."orderDetails"
    ADD CONSTRAINT orderdetails_idmenu_foreign FOREIGN KEY ("idMenu") REFERENCES public.menu("idMenu") ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."orderDetails" DROP CONSTRAINT orderdetails_idmenu_foreign;
       public          postgres    false    3523    219    237            �           2606    41975 )   orderDetails orderdetails_idorder_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public."orderDetails"
    ADD CONSTRAINT orderdetails_idorder_foreign FOREIGN KEY ("idOrder") REFERENCES public.orders("idOrder") ON DELETE CASCADE;
 U   ALTER TABLE ONLY public."orderDetails" DROP CONSTRAINT orderdetails_idorder_foreign;
       public          postgres    false    235    237    3543            �           2606    41961     orders orders_idcustomer_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_idcustomer_foreign FOREIGN KEY ("idCustomer") REFERENCES public.customer("idCustomer");
 J   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_idcustomer_foreign;
       public          postgres    false    3527    235    223            v   �   x�uн
�@�z�UI���ʴV��F1E@S���b�޴����:���1��9zV�"%�f����A��ڂ�:n��7/&�,ޕ�B��A�	]WUs��si����Sl
�R�8����Ψ�E��~�i�R� h�q[      x   D   x�%��� �����1�^���ۑ�/�Y64𒗄[�c�-�{��"KI������I�Z�����08      t   ^   x�3�H�N-Q�K,��2��M,N�N�S�I,-�2��*����s�p:�f'*'V�q�By��<.3��of^i.�o������d��qqq ���      n   8  x�]��n�0�u��+�yx�Zw[�P�r�E�*;��
!k�ܱ��H�!��l<�����Nk0k�`@
ky��\i1�;yw*�׫����E7i�i�h��\��1�&y!ŷ���I}�%n����\S�������)��q�s-�P�P�r��;�vH�\�2���@�cs���X�q�.Ω\F���8UX����c�uH�M���c��Yj
o3=��7%�����ͥ^n�R�-����qA��LB7KD���2u>�BX�	F5�5��k�x���o��	�4�\�i-�(?5�����!9��      p      x�3�4������ V      r   �  x��W�n��}V��/w� i�N6œx��&�^�ɦԦ���H��O5I�[�YbA�!��T�S]U��3ݺ���.��Ɩ�#�7[w]�bl�����^�+]m��?��*�FIUv��p_o*���F0QxU]�� ���h����r�UpY�ftF�[<׹nf���w�^�6誼�m�tP�>\�D'k�#B�/&)N=7�1f�0�����	*�*Q��,R�J��1������ [����<��jr|�#}��ri՗�M������C�|���0gdO��Mg���K�7��z��|9��=���v�2 ��*�	OB�L�B
�h��P�L(iR�	�R�C
�v
����X7U�'��#���1��
	�L�Kmbq!3J��!�j	E�����:��T
5�����х�VW�Q7I��/�+ p)�J
�1O�撐*��dw�5�w����>��<�]�����Zq�8�!g$�G��ǩ�`y��È�1���&�,�>�_w�j[:$�m������j�n�\����Xfngӧߺ<��BwO���3��י���;���bL(N��P�2�r$t"���@<ԙ223Qh��T�5����.]{�/��%ri�۾�ͤ�@
�j�Ej,�ql�H�"�EBl��\�Di6��Q���`a�,�wLP���x䈇;l#�)���T�,��0R��qj�E����C�x�x���w�mk�6 �_̝��jS��P=MUc�#��đ$;�{?p���
ׂ2F�)�=��W��g�ӡ�}��Aܒ�n$[T��TA�]���U�NQ���*�v�T7�K@��1���q�&Ĉ��A]N�tv�j���>hH�M��OX�]�Og$�<�|ѼX^��)����w-�a�|W�2$q
d�H��!�y�"���冉}9R6��-��m��o�����c�� � ��GM��{���]
��Ŝ�nqvR�W;)֨Z����"�Y�|)��E8��ı�7Q�;#Hi��Mơ�!��b7I@�v��<w��[�UtE����:�*�%�`h��#�4�m
[&�U��u�$���4����z���9����q�~~���;5��c�o�x-^����9y�9|}�����6G6��Ҏ��8���>��P��F,	��@��)����1e�<e;�����y�g4f�?�
A~i��3:�>��N@�Ϊ*�'K�Tm׎_}?�Jߎa���lj�Q_��-f��?�n�����A���bŽ����|evU�/a$�8"at��ų��t.W��>8z�+�11Of�u~�
�h�Dא��Ɓ�>�3���Cmj��.�>F�X�_�{��#�#L���J��o��=�-lQۃw����=~�v���\a��{o���q�@��˪R�!��D�(��G�VҦ�'2�A���g*�5��Ra=��MMg�n1S�`ո��$��$B9��J1'����5�`C�J�/|ZĆ ��R�/�(�#�$��~%z;b�ёn4:�И��	�� ��_�Å.k�>8���M<b��=xm�>��{�P4m��*'OP��
�v�t�a�9O���Wi�F�������g�o���{"�w!��-`�>h�|r�v���.I?9w��~Wx��	�ŭ(��A�EE�nո�+�����֒F�(3A�K��VHbA�$��@ٚ�].�r� �H/�®�m����_(�j�wM�ޔ�J��F�f�:�ot���9Ǚy�`�ѐ�ױ����>h�Oo� F�h�B�o�>����_��kQ�4��� �zL��Ϫ=X<�%���/ᦍ?l�vx��n\���pnBv�	��D[��O���f7����F �6#�6i��L�ʴ�54�n�aѾc�G��4����Ʋ۷�m�G�~"��È��5���A����_��h�=z�'_}9�      �   n  x���=O�0����Q#��_��J��:��b�U�6)J���]
J� R���Go|w@Jd����O�a�s]���r�u�T�D!��F�q�w�
�"�c皚-�o���� �����%��U�sM�{����ʵu�K�@�$�c����ۇk�|�?��++��E�0���TX"Ą9Nj*�cD�hR��JEU�R����Y.�sڤOyYA�����t^_jzN�p��4��jR��QM�f�������~�qj$���.�փ���JA�YE���%�ȍ��bp/���={�͡�iՍp�)�� XAh�-��Z�#v�J�FV`�L�Ȗ�MS�e"�f؂G߼{����o�SD3U�E>��O�a�      �   �   x���K�0�p��X��������D��ԉ�G��A�
��@Hl#ߔ��Q��Ɠ��Y�%E�d� �~c�j	�79�J���R�i��A�o��s΁TBے"Kjhj.]�0ρ~�Ɂ���%ENA���rj�6⽺I�o�D:�˒"絜��L}���Q��O����� �ַr'      ~   G   x�3�tJ��Tp�L��445 N##]s]CN�Ҽ�b.#N����"�Ң��TN�2�:K��=... .�M      z   �   x�mϱ�0�Z��}`��")��d�9")���8�`�=���{ZO8!��QT��\$I_̱Y���XO�l�tl�j�œ�� v��Q`����ˉo�xB��j	!��_'�On���Hv�A�v�;=Dr-�\c��{o��~ M�:@      �   4   x�3��*�KI��42�t,�ITp*����J,H,�����p��qqq "�X      �   X   x�-�!�  @�>f)-*�'�����#s��_�(9��4���jG���Y��%�*���㡣���Q�g�O*����"�3�      |   7   x�3�N�M-*�IL�IU0�2B0�2F0�2��M-JJLB�1E1����� �,$     