import React from 'react';

import { contactSectionRecordLabels } from '../../data/data.js';
import { carparkRecordsLogoBlack } from '../../utilities/cloudinary.js';

import Header from '../shared/Header.js';
import { ExternalLink } from '../shared/Links.js';

import scss from '../../styles/Contact.scss';

export default function Contact({ contacts }) {
  return (
    <section id='contact' className='contact page page--contact'>
      <Header text="contact" />
      <span className='contact__section'>
        <h4 className='contact__header'>Management</h4>
        {contacts.map(({ email }, index) =>
          <ExternalLink
            key={index}
            href={`mailto:${email}`}
          >
            {email}
          </ExternalLink>
        )}
      </span>
      <span className='contact__section'>
        <h4 className='contact__header'>Record Label</h4>
        {contactSectionRecordLabels.map(({ href, text }, index) =>
          <ExternalLink
            key={index}
            href={href}
          >
            {text}
          </ExternalLink>
        )}
      </span>
      <span className='contact__logos'>
        <img className='contact__carpark-logo' src={carparkRecordsLogoBlack} alt='' />
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2008.000000 476.000000"
          width="160px"
          preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,476.000000) scale(0.100000,-0.100000)"
            fill="#373535" stroke="none">
            <path d="M8002 2413 l3 -2058 46 -3 c30 -2 50 2 57 11 9 11 11 514 10 2058
l-3 2044 -58 3 -57 3 2 -2058z"/>
            <path d="M415 4328 c-3 -7 -4 -884 -3 -1948 l3 -1935 3160 0 3160 0 3 1948 2
1947 -3160 0 c-2519 0 -3162 -3 -3165 -12z m6183 -126 c10 -7 12 -376 10
-1813 l-3 -1804 -3027 -3 -3028 -2 0 1808 c0 995 3 1812 7 1815 9 10 6025 8
6041 -1z"/>
            <path d="M2697 3973 c-9 -8 -9 -1366 -1 -1387 5 -14 35 -16 229 -16 222 0 223
0 229 23 8 29 8 1351 0 1371 -5 14 -35 16 -228 16 -123 0 -226 -3 -229 -7z
m408 -693 l0 -645 -180 0 -180 0 -3 639 c-2 505 0 641 10 648 7 4 90 7 183 5
l170 -2 0 -645z"/>
            <path d="M3235 3720 c-3 -5 -3 -27 1 -47 8 -48 65 -344 109 -568 18 -93 48
-246 66 -340 17 -93 36 -176 42 -183 7 -9 61 -12 226 -10 l216 3 12 40 c7 22
17 65 23 95 45 234 101 523 109 560 6 25 22 111 38 192 35 187 43 185 83 -27
6 -34 34 -158 80 -362 18 -80 29 -128 39 -178 6 -27 22 -98 36 -157 28 -121
31 -153 13 -165 -7 -4 -69 -10 -138 -13 l-125 -5 -3 -109 c-2 -81 1 -112 10
-118 17 -11 377 -10 455 1 131 19 195 76 232 206 10 35 79 372 102 495 4 25
24 122 44 215 20 94 41 195 46 225 12 64 22 113 38 189 6 29 8 57 5 62 -7 11
-381 12 -388 1 -3 -5 -13 -89 -22 -188 -9 -98 -22 -197 -29 -219 l-12 -40 -7
80 c-3 44 -11 119 -16 166 -6 47 -10 106 -10 130 0 84 24 80 -405 77 l-380 -3
-7 -80 c-3 -44 -11 -138 -17 -209 -6 -71 -13 -131 -15 -134 -15 -14 -24 20
-31 115 -4 59 -12 153 -19 208 l-11 100 -192 3 c-120 1 -194 -1 -198 -8z m341
-52 c4 -7 11 -53 15 -102 18 -212 59 -609 64 -623 2 -7 13 -13 24 -13 22 0 25
15 41 180 10 110 36 375 48 495 l7 70 143 3 c110 2 142 0 142 -10 0 -7 -5 -40
-11 -73 -6 -33 -14 -80 -19 -105 -9 -56 -67 -351 -79 -405 -5 -22 -15 -67 -21
-100 -6 -33 -16 -78 -20 -100 -5 -22 -17 -83 -26 -135 -10 -52 -22 -101 -27
-107 -7 -10 -57 -13 -189 -13 -134 0 -179 3 -182 13 -2 6 -13 66 -26 132 -12
66 -32 174 -46 240 -13 66 -32 170 -44 230 -11 61 -25 130 -30 155 -17 76 -50
251 -50 266 0 19 275 21 286 2z m879 -10 c5 -24 21 -186 35 -348 33 -385 33
-382 63 -378 24 3 25 12 57 348 5 63 15 151 20 196 6 44 10 98 10 120 0 87 -5
84 151 84 76 0 140 -3 143 -8 2 -4 -7 -59 -20 -122 -13 -63 -28 -140 -34 -170
-5 -30 -14 -73 -19 -95 -5 -22 -16 -78 -26 -125 -26 -131 -65 -321 -74 -365
-5 -22 -15 -67 -21 -100 -40 -201 -56 -240 -118 -281 -49 -34 -147 -46 -337
-42 l-170 3 0 65 0 65 118 5 c174 7 179 16 128 257 -16 76 -39 177 -50 223
-10 47 -22 101 -26 120 -4 19 -11 51 -15 70 -4 19 -28 129 -54 244 -25 114
-49 212 -52 218 -3 5 -3 15 0 23 4 12 32 15 145 15 138 0 141 0 146 -22z"/>
            <path d="M821 2456 c-8 -9 -10 -199 -9 -692 l3 -679 338 -3 337 -2 0 130 0
129 -112 3 -113 3 -3 549 c-1 385 -5 553 -13 563 -17 19 -412 19 -428 -1z
m387 -595 c2 -429 5 -557 15 -563 6 -4 58 -8 113 -8 84 0 103 -3 108 -16 8
-20 8 -102 0 -131 l-6 -23 -279 0 c-265 0 -279 1 -289 19 -16 30 -14 1253 2
1269 9 9 57 12 173 10 l160 -3 3 -554z"/>
            <path d="M3709 2225 c-83 -13 -130 -45 -166 -110 l-28 -50 0 -415 c0 -406 0
-416 22 -455 25 -47 54 -75 103 -101 49 -26 207 -26 268 -1 38 15 43 15 49 1
3 -8 2 -19 -3 -24 -5 -5 -104 -11 -219 -12 l-210 -3 0 -115 0 -115 290 -3
c186 -2 312 1 350 8 86 17 138 50 167 107 l23 48 3 609 c2 450 0 612 -9 622
-9 11 -50 14 -195 14 -161 0 -184 -2 -192 -17 -9 -15 -15 -15 -52 -4 -76 23
-134 27 -201 16z m230 -81 c34 -17 63 -28 66 -26 3 3 5 16 5 29 l0 23 145 0
146 0 -3 -604 -3 -605 -28 -29 c-49 -51 -92 -57 -407 -57 l-285 0 -3 53 c-2
31 2 60 9 68 9 11 49 14 200 14 228 0 229 0 229 104 0 36 -5 68 -10 71 -6 3
-22 -2 -38 -13 -111 -78 -309 -64 -369 26 -32 48 -35 98 -31 497 3 311 5 364
19 390 40 72 99 97 216 92 66 -3 93 -9 142 -33z"/>
            <path d="M3866 1998 c-14 -19 -16 -70 -16 -350 0 -324 0 -327 22 -348 14 -12
35 -20 58 -20 23 0 44 8 58 20 22 21 22 24 22 344 0 312 -1 324 -21 350 -28
35 -100 38 -123 4z m92 -344 c2 -271 0 -313 -13 -318 -8 -3 -22 -3 -30 0 -13
5 -15 50 -15 313 0 169 3 311 7 315 4 4 16 6 28 4 20 -3 20 -10 23 -314z"/>
            <path d="M1828 2221 c-87 -10 -161 -41 -186 -79 -40 -61 -42 -85 -42 -489 0
-371 1 -395 21 -447 15 -41 29 -61 57 -78 68 -42 105 -48 339 -48 267 0 311 8
368 65 52 51 65 106 65 266 l0 119 -195 0 -195 0 0 -100 c0 -85 -3 -101 -18
-109 -11 -6 -24 -6 -35 0 -15 9 -17 27 -17 127 0 64 4 123 8 129 6 9 67 13
227 15 l220 3 3 200 c4 239 -6 302 -54 355 -52 57 -107 70 -314 75 -96 2 -210
0 -252 -4z m487 -76 c73 -37 80 -61 80 -290 l0 -200 -220 -5 -220 -5 -3 -175
c-3 -169 -2 -176 19 -192 26 -22 77 -23 107 -2 20 13 22 24 22 97 0 45 4 88 8
95 7 9 43 12 148 10 l139 -3 -1 -122 c-1 -108 -4 -124 -23 -152 -13 -17 -35
-38 -49 -45 -46 -24 -215 -39 -361 -33 -216 9 -275 34 -300 125 -14 49 -14
764 -1 814 6 20 21 47 34 59 44 42 85 48 341 46 218 -2 244 -4 280 -22z"/>
            <path d="M1967 2022 c-14 -15 -17 -40 -17 -130 l0 -112 75 0 75 0 1 78 c2 128
-1 146 -23 165 -27 23 -90 22 -111 -1z m81 -44 c12 -12 17 -104 6 -132 -3 -9
-16 -16 -29 -16 -28 0 -35 17 -35 80 0 27 3 55 6 64 7 19 35 21 52 4z"/>
            <path d="M2764 2221 c-118 -14 -182 -59 -205 -145 -6 -22 -12 -93 -13 -156
l-1 -115 178 -3 c97 -1 177 -6 177 -11 0 -4 -57 -32 -127 -61 -202 -85 -233
-125 -233 -302 1 -193 32 -285 110 -325 38 -19 61 -22 145 -23 62 0 115 6 140
15 52 18 65 18 65 0 0 -13 26 -15 193 -13 l192 3 3 445 c4 509 0 556 -53 617
-52 61 -104 74 -320 78 -99 2 -212 0 -251 -4z m456 -63 c53 -17 81 -39 99 -78
13 -30 16 -99 19 -469 2 -238 1 -444 -2 -457 l-7 -25 -137 3 c-128 3 -137 4
-140 23 -6 33 -18 37 -53 16 -42 -24 -144 -51 -196 -51 -70 0 -140 27 -169 65
-23 30 -28 50 -37 147 -5 62 -7 140 -3 173 12 88 43 113 247 199 90 38 172 71
181 74 23 6 31 52 27 151 -3 66 -8 83 -24 95 -26 20 -80 20 -110 0 -22 -15
-25 -23 -25 -83 0 -39 -5 -72 -12 -79 -8 -8 -54 -12 -139 -12 -160 0 -156 -4
-142 131 15 150 42 174 213 190 109 9 364 1 410 -13z m-226 -184 c3 -9 6 -44
6 -80 0 -60 -1 -64 -30 -79 -34 -18 -32 -25 -32 87 0 36 3 71 6 77 11 16 43
13 50 -5z"/>
            <path d="M2956 1580 c-61 -31 -65 -42 -66 -167 0 -103 2 -114 22 -133 28 -25
78 -26 109 -1 23 19 24 24 24 168 l0 148 -25 2 c-14 2 -42 -6 -64 -17z m38
-66 c3 -9 6 -53 6 -99 0 -71 -3 -86 -18 -94 -36 -19 -45 1 -43 95 1 48 7 94
13 101 14 18 35 16 42 -3z"/>
            <path d="M4484 2216 c-3 -7 -4 -231 -2 -497 3 -474 3 -485 25 -524 41 -77 90
-107 196 -123 59 -9 120 -3 190 19 29 10 40 10 49 1 8 -8 71 -12 205 -12 l193
0 -2 573 -3 572 -189 3 c-145 2 -191 -1 -198 -10 -4 -7 -8 -207 -8 -444 0
-448 -2 -468 -40 -444 -13 8 -16 78 -20 452 l-5 443 -193 3 c-158 2 -193 0
-198 -12z m333 -44 c9 -6 13 -113 15 -434 3 -414 4 -428 23 -442 27 -21 99
-21 116 1 11 13 15 102 19 447 l5 431 125 3 c69 1 135 0 148 -3 l22 -5 0 -520
0 -520 -22 -5 c-13 -3 -79 -4 -148 -3 l-125 3 -3 33 c-2 18 -6 32 -10 30 -111
-59 -127 -63 -222 -63 -123 0 -163 18 -200 90 l-25 49 -3 445 c-1 244 -1 450
2 458 4 10 37 13 138 13 73 0 138 -4 145 -8z"/>
            <path d="M5675 2221 c-120 -14 -174 -46 -206 -119 -18 -40 -19 -75 -19 -444 0
-436 2 -458 55 -513 52 -56 105 -65 368 -65 307 0 370 19 412 122 19 46 33
254 21 302 l-6 26 -195 0 -195 0 0 -99 c0 -71 -4 -102 -14 -110 -18 -15 -43
-5 -50 22 -8 29 -8 211 0 231 5 14 35 16 230 16 l224 0 6 25 c3 14 5 119 2
233 -3 192 -5 211 -27 254 -46 96 -108 117 -356 123 -99 2 -211 0 -250 -4z
m454 -63 c110 -24 131 -79 131 -344 l0 -164 -227 -2 -228 -3 -3 -175 c-3 -169
-2 -176 19 -192 28 -24 81 -23 110 1 21 17 24 29 28 110 l3 92 147 -3 146 -3
3 -75 c4 -76 -11 -169 -32 -203 -6 -10 -27 -27 -47 -37 -105 -55 -528 -52
-612 4 -67 45 -67 47 -67 489 0 427 2 447 51 478 39 25 68 31 184 39 139 8
324 3 394 -12z"/>
            <path d="M5817 2022 c-14 -15 -17 -40 -17 -131 l0 -112 78 3 77 3 0 108 c0
102 -1 110 -24 128 -30 25 -92 25 -114 1z m81 -44 c12 -12 17 -104 6 -132 -3
-9 -16 -16 -29 -16 -28 0 -35 17 -35 80 0 27 3 55 6 64 7 19 35 21 52 4z"/>
            <path d="M11078 4165 c-3 -3 -43 -10 -89 -15 -46 -5 -115 -16 -154 -25 -38 -9
-85 -19 -103 -22 -18 -3 -35 -9 -38 -14 -3 -5 -16 -9 -29 -9 -13 0 -27 -4 -30
-10 -3 -5 -17 -10 -30 -10 -13 0 -27 -4 -30 -10 -3 -5 -13 -10 -21 -10 -30 0
-356 -166 -374 -191 -3 -4 -19 -15 -36 -25 -112 -67 -319 -266 -423 -405 -34
-46 -68 -91 -75 -99 -7 -9 -15 -22 -19 -30 -4 -8 -18 -33 -31 -55 -28 -45
-105 -199 -130 -260 -9 -22 -21 -48 -26 -57 -6 -10 -10 -27 -10 -37 0 -11 -4
-22 -9 -25 -5 -3 -11 -20 -14 -38 -2 -18 -11 -58 -19 -88 -30 -109 -68 -362
-68 -448 0 -58 46 -245 72 -291 67 -119 168 -203 303 -251 58 -21 192 -30 460
-30 l295 0 21 48 c36 81 44 97 50 102 3 3 19 25 34 50 16 25 64 81 108 125
l79 80 -463 5 c-502 5 -489 4 -523 61 -28 47 -21 224 15 394 5 28 13 65 16 83
3 18 9 35 14 38 5 3 9 15 9 28 0 12 3 26 7 29 3 4 14 28 23 54 18 51 79 181
92 198 5 6 36 52 70 103 98 148 268 312 438 422 68 44 242 130 263 130 9 0 19
5 22 10 3 6 17 10 30 10 13 0 26 4 29 9 3 5 20 11 38 14 39 7 103 21 173 38
31 8 123 12 240 12 161 0 204 -3 285 -22 52 -13 106 -25 120 -28 14 -2 34 -8
45 -13 11 -4 36 -13 55 -20 114 -40 217 -93 340 -175 143 -96 357 -323 436
-463 31 -55 95 -183 107 -212 5 -14 13 -33 18 -42 5 -10 9 -25 9 -33 0 -8 4
-23 10 -33 34 -63 90 -428 71 -469 -6 -13 -11 -32 -11 -42 0 -9 -14 -30 -31
-47 l-30 -29 -799 -5 c-620 -4 -802 -8 -812 -17 -6 -7 -19 -13 -28 -13 -23 0
-115 -46 -180 -90 -116 -79 -225 -226 -259 -350 -7 -25 -17 -59 -22 -76 -13
-44 -11 -444 2 -501 26 -110 72 -196 139 -263 71 -71 129 -106 220 -134 41
-12 569 -14 615 -2 66 17 159 69 210 117 52 49 125 157 125 184 0 8 4 16 9 19
17 11 24 85 28 326 3 223 2 246 -14 257 -21 16 -408 19 -418 3 -3 -5 -3 -16 2
-22 25 -40 33 -94 33 -236 0 -84 -4 -160 -9 -170 -5 -9 -14 -29 -22 -44 -7
-16 -20 -28 -30 -28 -10 0 -21 -5 -24 -10 -4 -6 -78 -10 -189 -10 -229 0 -249
7 -274 96 -17 58 -15 271 2 337 20 75 38 107 85 150 78 70 35 67 837 67 686 0
817 4 889 29 170 60 306 208 347 378 15 62 15 307 1 403 -11 73 -32 168 -52
240 -5 19 -13 46 -16 60 -4 14 -10 34 -14 45 -5 11 -14 38 -21 60 -25 80 -136
293 -206 397 -148 219 -304 374 -523 523 -100 68 -346 195 -376 195 -8 0 -17
5 -20 10 -3 6 -17 10 -30 10 -13 0 -26 4 -29 9 -3 5 -18 11 -33 14 -16 3 -57
12 -93 21 -194 50 -317 66 -496 66 -72 0 -133 -2 -136 -5z"/>
            <path d="M16745 3978 c-42 -11 -67 -20 -112 -40 -47 -22 -137 -120 -168 -183
-27 -55 -29 -69 -30 -171 0 -64 5 -121 11 -135 7 -13 19 -41 28 -61 21 -48
114 -139 168 -165 82 -39 99 -43 193 -43 93 0 111 4 192 42 65 32 183 160 183
200 0 8 5 19 12 26 7 7 11 53 11 129 0 117 0 118 -37 188 -44 82 -102 140
-177 176 -97 47 -184 59 -274 37z m218 -128 c103 -52 159 -147 159 -270 0 -87
-20 -142 -75 -205 -89 -103 -254 -125 -369 -49 -94 63 -133 141 -131 264 1 89
28 153 90 213 83 79 222 100 326 47z"/>
            <path d="M13877 3963 c-10 -9 -8 -746 2 -761 5 -9 24 -12 52 -10 l44 3 2 130
c4 188 -7 172 120 177 135 6 188 28 236 97 30 43 32 52 32 132 0 130 -36 183
-155 226 -37 13 -321 19 -333 6z m303 -107 c49 -18 80 -67 80 -128 0 -41 -5
-54 -34 -85 l-34 -37 -102 -4 c-79 -3 -104 -1 -111 9 -10 16 -12 219 -3 243 5
13 22 16 88 15 44 0 97 -6 116 -13z"/>
            <path d="M14592 3958 c-6 -6 -12 -19 -12 -28 0 -9 -4 -20 -8 -25 -5 -6 -17
-32 -26 -60 -10 -27 -22 -60 -27 -72 -19 -48 -27 -69 -39 -103 -7 -19 -18 -48
-25 -65 -6 -16 -18 -46 -25 -65 -19 -55 -48 -127 -61 -152 -5 -10 -9 -25 -9
-33 0 -8 -4 -23 -9 -33 -23 -44 -41 -92 -41 -112 0 -19 4 -21 57 -18 l57 3 16
45 c9 25 20 54 24 65 5 11 15 38 23 60 8 22 20 43 26 47 15 10 249 10 263 0
12 -7 33 -52 54 -112 7 -19 16 -44 20 -55 5 -11 11 -28 14 -37 4 -15 17 -18
66 -18 l60 0 -6 28 c-3 15 -13 43 -21 62 -28 67 -31 75 -43 110 -7 19 -16 44
-20 55 -4 11 -13 36 -20 55 -7 19 -16 44 -20 55 -32 76 -39 94 -50 125 -7 19
-17 46 -22 60 -17 41 -25 62 -56 145 l-29 80 -49 3 c-30 2 -54 -2 -62 -10z
m95 -253 c14 -44 29 -89 34 -100 5 -11 10 -33 11 -50 l3 -30 -87 -3 -88 -3 0
34 c0 18 4 37 8 43 5 5 21 51 37 102 20 65 33 92 43 90 8 -2 25 -38 39 -83z"/>
            <path d="M15080 3580 l0 -390 54 0 c40 0 55 4 60 16 3 9 6 86 6 172 l0 156 32
-45 c18 -24 41 -53 50 -63 10 -11 18 -25 18 -32 0 -7 4 -14 8 -16 5 -1 35 -41
67 -88 33 -47 64 -88 70 -92 14 -10 135 -10 135 0 0 13 -162 236 -180 247 -15
10 -12 35 5 35 28 0 116 49 138 77 41 51 47 74 47 165 0 102 -18 150 -73 194
-58 46 -98 54 -274 54 l-163 0 0 -390z m333 261 c60 -37 83 -93 65 -160 -13
-47 -34 -70 -83 -91 -56 -25 -185 -37 -196 -19 -10 16 -12 259 -2 284 10 27
168 16 216 -14z"/>
            <path d="M15657 3963 c-9 -8 -9 -66 -1 -87 5 -12 21 -16 75 -16 l69 0 2 -332
3 -333 55 0 55 0 3 332 2 332 73 3 72 3 3 53 3 52 -204 0 c-112 0 -207 -3
-210 -7z"/>
            <path d="M17347 3964 c-4 -4 -7 -175 -7 -379 0 -417 -3 -399 72 -393 l43 3 3
154 c1 91 7 160 13 168 8 9 50 13 142 15 130 3 132 3 135 27 2 12 1 34 -2 47
-6 24 -8 24 -135 24 -98 0 -131 3 -140 14 -8 9 -11 48 -9 112 l3 99 133 5
c147 6 154 9 150 70 l-3 35 -196 3 c-107 1 -198 -1 -202 -4z"/>
            <path d="M18082 3918 l3 -53 72 -3 73 -3 2 -332 3 -332 55 0 55 0 3 332 2 332
73 3 72 3 3 53 3 52 -211 0 -211 0 3 -52z"/>
            <path d="M18585 3958 c-3 -7 -4 -182 -3 -388 l3 -375 55 0 55 0 5 165 5 165
155 0 155 0 5 -165 5 -165 55 0 55 0 0 385 0 385 -55 0 -55 0 -3 -160 c-2
-112 -6 -161 -15 -167 -6 -4 -73 -8 -147 -8 -74 0 -141 4 -147 8 -9 6 -13 55
-15 167 l-3 160 -53 3 c-36 2 -54 -1 -57 -10z"/>
            <path d="M19285 3957 c-3 -6 -4 -181 -3 -387 l3 -375 208 -3 207 -2 0 50 0 50
-150 0 -150 0 0 120 0 120 150 0 150 0 0 55 0 55 -150 0 -150 0 0 110 0 109
148 3 147 3 3 53 3 52 -206 0 c-156 0 -207 -3 -210 -13z"/>
            <path d="M15620 2793 c-40 -27 -80 -66 -80 -79 0 -7 -6 -14 -12 -16 -9 -3 -13
-32 -13 -95 0 -86 2 -93 30 -128 17 -21 51 -48 75 -61 67 -33 159 -74 169 -74
5 0 21 -14 36 -32 24 -28 27 -39 22 -82 -4 -43 -10 -55 -42 -83 -54 -47 -111
-47 -157 0 -18 18 -37 48 -43 67 -9 32 -13 35 -53 38 -63 5 -73 -7 -57 -66 17
-66 28 -85 75 -124 98 -84 265 -69 345 31 39 49 47 75 47 152 0 80 -20 136
-58 170 -30 26 -113 69 -134 69 -10 0 -22 5 -25 10 -3 6 -14 10 -23 10 -28 0
-89 57 -95 87 -11 60 43 123 105 123 38 0 85 -35 93 -69 7 -35 30 -51 72 -51
39 0 53 17 46 54 -12 71 -46 118 -110 150 -44 22 -178 21 -213 -1z"/>
            <path d="M17645 2800 c-3 -5 -15 -10 -26 -10 -27 0 -116 -59 -160 -106 -43
-46 -79 -108 -79 -134 0 -10 -4 -22 -10 -25 -14 -8 -13 -187 1 -222 26 -65 35
-81 71 -130 36 -49 116 -113 142 -113 7 0 16 -3 20 -7 12 -12 99 -32 143 -33
38 0 118 17 168 36 23 9 90 53 121 80 29 26 89 123 99 159 13 52 17 207 6 218
-6 6 -11 18 -11 27 0 25 -29 78 -47 89 -11 6 -28 3 -49 -8 -37 -18 -49 -38
-35 -55 21 -25 43 -130 38 -176 -12 -100 -77 -194 -162 -234 -71 -34 -175 -36
-238 -5 -131 66 -197 214 -155 349 36 114 129 192 248 208 55 8 68 14 97 46
19 20 31 41 28 46 -8 13 -202 13 -210 0z"/>
            <path d="M18020 2798 c-134 -56 -195 -110 -247 -218 -24 -50 -27 -66 -27 -168
0 -73 4 -116 12 -124 7 -7 12 -18 12 -26 0 -8 9 -27 21 -43 l20 -29 39 20 c50
26 54 33 36 72 -31 70 -40 132 -26 184 16 63 33 104 42 104 5 0 8 6 8 13 0 19
69 81 115 102 57 27 176 27 230 0 83 -40 139 -118 163 -225 21 -91 -35 -225
-117 -281 -56 -37 -89 -49 -140 -49 -41 0 -52 -5 -88 -40 -42 -40 -42 -40 -20
-55 26 -18 114 -19 177 -2 117 33 219 113 261 205 41 89 52 158 38 240 -6 40
-16 75 -20 78 -5 3 -9 12 -9 21 0 26 -80 131 -123 160 -45 30 -62 39 -117 59
-42 16 -204 17 -240 2z"/>
            <path d="M13880 2410 l0 -390 55 0 55 0 0 310 c0 171 3 310 8 310 11 0 37 -62
152 -355 4 -11 20 -46 34 -78 14 -32 26 -62 26 -68 0 -5 9 -29 20 -51 11 -23
20 -48 20 -55 0 -10 11 -13 41 -11 l41 3 40 100 c22 55 44 110 49 123 9 21 18
45 38 95 56 141 79 195 92 219 5 10 9 24 9 32 0 20 27 28 34 10 3 -9 6 -144 6
-300 l0 -284 55 0 55 0 0 390 0 390 -83 0 c-96 0 -108 -7 -127 -70 -8 -25 -17
-49 -20 -55 -4 -5 -17 -37 -30 -70 -13 -33 -29 -76 -37 -95 -23 -54 -30 -72
-43 -110 -7 -19 -20 -53 -30 -75 -10 -22 -21 -50 -24 -62 -16 -52 -33 -28 -97
135 -5 12 -13 32 -18 45 -5 12 -26 65 -46 117 -50 128 -56 142 -66 162 -5 10
-9 27 -9 38 0 30 -31 40 -119 40 l-81 0 0 -390z"/>
            <path d="M14867 2794 c-13 -14 -8 -576 6 -614 19 -52 65 -120 82 -120 8 0 15
-4 15 -9 0 -11 39 -26 103 -42 97 -24 216 23 273 106 40 58 45 105 42 400 l-3
280 -52 3 c-48 3 -53 1 -58 -20 -2 -13 -6 -150 -7 -305 l-3 -281 -25 -27 c-35
-38 -72 -55 -118 -55 -40 0 -98 31 -112 60 -4 8 -13 26 -19 40 -7 16 -12 125
-14 305 l-2 280 -50 3 c-28 2 -54 0 -58 -4z"/>
            <path d="M16070 2411 l0 -391 55 0 55 0 0 154 c0 85 3 161 6 170 5 14 29 16
160 16 l154 0 2 -167 3 -168 58 -3 57 -3 -2 388 -3 388 -49 3 c-32 2 -52 -1
-57 -10 -5 -7 -9 -84 -9 -170 l0 -158 -149 0 c-109 0 -152 3 -158 13 -4 6 -10
82 -13 167 l-5 155 -52 3 -53 3 0 -390z"/>
            <path d="M16770 2411 l0 -391 55 0 55 0 0 165 c0 91 3 165 8 165 15 0 29 -16
77 -85 28 -38 53 -74 58 -80 4 -5 33 -45 63 -87 l55 -78 63 0 c34 0 65 3 69 6
5 6 -12 33 -60 94 -6 8 -40 53 -74 98 -65 87 -67 101 -11 102 30 0 95 42 121
79 12 16 29 58 38 93 16 62 16 68 -2 124 -25 80 -50 116 -105 150 -44 27 -49
28 -227 32 l-183 4 0 -391z m329 257 c28 -15 47 -35 61 -65 25 -53 25 -53 -1
-108 -30 -63 -108 -98 -210 -93 l-64 3 -3 143 -3 142 90 0 c72 0 97 -4 130
-22z"/>
            <path d="M18610 2410 l0 -390 55 0 55 0 0 295 c0 251 2 295 15 295 13 0 26
-23 57 -100 6 -14 14 -33 19 -42 5 -10 9 -22 9 -28 0 -5 11 -33 24 -62 38 -86
136 -334 136 -347 0 -6 18 -11 45 -11 34 0 45 4 45 15 0 8 4 23 9 33 5 9 35
82 67 162 31 80 62 159 69 175 7 17 23 55 35 85 12 30 26 63 31 72 5 10 9 25
9 33 0 8 5 15 10 15 6 0 10 7 10 16 0 8 5 12 10 9 6 -4 10 -118 10 -311 l0
-304 55 0 55 0 0 390 0 390 -81 0 c-88 0 -119 -10 -119 -40 0 -11 -4 -28 -9
-38 -15 -28 -38 -83 -61 -147 -13 -33 -26 -64 -31 -70 -5 -5 -9 -17 -9 -27 0
-10 -4 -26 -9 -36 -5 -9 -13 -28 -19 -42 -5 -14 -22 -56 -38 -93 -29 -72 -52
-85 -64 -36 -7 25 -33 88 -51 121 -5 10 -9 25 -9 33 0 8 -4 23 -9 33 -5 9 -17
35 -26 57 -9 22 -21 51 -27 65 -6 14 -14 34 -18 45 -4 11 -12 31 -18 45 -6 14
-16 43 -23 65 -19 58 -32 65 -126 65 l-83 0 0 -390z"/>
            <path d="M14170 1640 c-8 -5 -24 -10 -36 -10 -38 0 -118 -47 -172 -101 -60
-59 -96 -130 -117 -228 -12 -57 -12 -76 1 -135 27 -130 100 -231 206 -284 72
-36 128 -52 186 -52 54 0 164 27 170 42 2 5 12 8 23 8 10 0 19 5 19 10 0 6 6
10 14 10 23 0 112 96 136 147 28 60 54 159 46 178 -4 13 -42 15 -238 15 -128
0 -239 -4 -246 -9 -8 -5 -12 -23 -10 -47 l3 -39 170 -3 c93 -1 173 -6 178 -11
11 -11 -29 -79 -65 -112 -16 -14 -49 -37 -75 -50 -64 -33 -179 -33 -238 0 -86
49 -139 120 -165 224 -32 124 70 289 205 332 95 29 169 11 265 -66 33 -26 44
-30 91 -27 72 4 73 21 5 89 -54 53 -133 101 -191 114 -54 13 -150 16 -165 5z"/>
            <path d="M15680 1640 c-8 -5 -25 -10 -37 -10 -37 0 -126 -53 -178 -105 -105
-105 -150 -265 -110 -385 53 -156 138 -241 294 -295 112 -39 285 4 382 95 45
42 109 145 109 176 0 13 5 26 10 29 13 8 13 150 -1 194 -21 67 -60 138 -100
179 -22 23 -42 42 -45 42 -4 0 -18 10 -33 23 -15 12 -47 28 -72 35 -24 8 -58
18 -75 23 -40 12 -125 11 -144 -1z m218 -142 c95 -57 142 -142 142 -261 0
-113 -58 -213 -155 -268 -59 -33 -201 -33 -264 0 -55 29 -91 64 -118 116 -62
121 -56 224 19 335 80 119 248 154 376 78z"/>
            <path d="M14755 1617 c-3 -6 -4 -181 -3 -387 l3 -375 55 0 55 0 3 169 2 168
50 -66 c28 -37 50 -69 50 -71 0 -2 23 -35 51 -72 106 -143 94 -133 152 -133
94 0 94 3 -60 204 -50 66 -57 86 -29 86 17 0 77 31 108 56 51 41 68 86 68 185
0 130 -32 185 -133 228 -42 18 -69 21 -208 21 -119 0 -161 -3 -164 -13z m282
-98 c28 -8 58 -25 79 -46 30 -30 34 -40 34 -88 0 -71 -13 -98 -64 -126 -34
-20 -55 -24 -131 -24 l-90 0 -3 125 c-4 173 -5 170 69 170 33 0 81 -5 106 -11z"/>
            <path d="M16282 1622 c-22 -15 -12 -571 11 -632 9 -25 21 -46 27 -48 5 -2 10
-10 10 -17 0 -14 51 -49 114 -77 79 -37 212 -11 277 53 73 72 74 77 74 419 l0
305 -55 0 -55 0 -3 -296 -2 -297 -39 -43 c-37 -42 -40 -44 -97 -43 -68 0 -105
19 -132 68 -14 26 -18 74 -22 321 l-5 290 -45 3 c-25 1 -51 -2 -58 -6z"/>
            <path d="M16945 1617 c-3 -6 -4 -181 -3 -387 l3 -375 55 0 55 0 5 150 5 150
110 5 c91 4 118 9 159 30 50 26 96 75 96 103 0 9 5 19 10 22 19 11 12 132 -10
178 -28 57 -48 79 -95 101 -22 10 -48 23 -57 27 -29 15 -328 11 -333 -4z m336
-120 c32 -21 49 -57 49 -103 0 -88 -59 -129 -185 -129 l-80 0 -3 114 c-1 63 0
121 3 129 8 21 180 12 216 -11z"/>
          </g>
        </svg>
      </span>
      <style jsx>{scss}</style>
    </section>
  );
}