<template>
  <div class="landing">
    <div class="white-block"></div>
    <div class="landing__my-card">
      <div class="my-card-top">
        <div class="my-card-title">Трёх<span>этажная</span></div>
        <div class="my-card-title-sub">Пицца</div>
      </div>
      <div class="my-card-center">
        <v-row class="ma-0">
          <v-col class="my-card-center__text-block" cols="12" md="6">
            <div class="my-card-center__text-block--title">
              Впервые в столице Сибири
            </div>
            <div class="my-card-center__text-block--text">
              Хочешь пиццу? Закажи трёхэтажную! Наши пиццы смотрятся великолепно
              на любом столе, столике и даже на тумбочке. Вы с друзьями -
              трёхэтажная пицца. Корпоратив - трёхэтажная пицца. Хочется
              вкусненького домой - трёхэтажная пицца. Такого в Новосибирске ещё
              не было, заказывай сейчас!
            </div>
            <v-btn
              class="my-card-center__text-block--btn"
              large
              outlined
              color="#AE5100"
              @click="dialog = true"
            >
              {{
                $vuetify.breakpoint.xs
                  ? "Ссылка на приложение"
                  : "Пришлите мне ссылку на приложение"
              }}
            </v-btn>
          </v-col>
          <v-col class="my-card-center__img-block py-0 pr-0" cols="12" md="6">
            <div class="white-bg"></div>
            <v-row
              class="align-center ma-0 flex-wrap"
              style="position: relative"
            >
              <v-col cols="12" sm="10" class="pa-0">
                <v-img
                  src="../../assets/images/pizza.png"
                  max-width="564px"
                ></v-img>
              </v-col>
              <v-col
                cols="12"
                sm="2"
                class="pa-0 d-sm-block d-flex justify-space-between pa-sm-0 pa-4 mt-4 mt-sm-0"
              >
                <div class="my-card-center__img-block--info left-aligned">
                  <div class="head-text">3</div>
                  <div class="bot-text">этажа</div>
                </div>
                <div class="my-card-center__img-block--info">
                  <div class="head-text">45</div>
                  <div class="bot-text">минут</div>
                </div>
                <div class="my-card-center__img-block--info">
                  <div class="head-text">4</div>
                  <div class="bot-text">пицц</div>
                </div>
                <div class="my-card-center__img-block--info left-aligned">
                  <div class="head-text">12</div>
                  <div class="bot-text">напитков</div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="my-card-bot">
        <div class="d-flex justify-lg-space-around flex-wrap my-card-bot__wrap">
          <div
            class="d-flex align-center justify-center justify-md-end flex-column flex-sm-row inner mb-4 mb-sm-0"
          >
            <div class="os-title mr-sm-3 ml-0"><span>A</span>ndroid</div>
            <div class="os-pic ml-sm-3 ml-0">
              <v-img src="../../assets/images/ios.png" width="133px"></v-img>
            </div>
          </div>
          <div
            class="d-flex align-center justify-center justify-md-start flex-column flex-sm-row inner"
          >
            <div class="os-pic mr-sm-3 mr-0">
              <v-img src="../../assets/images/ios.png" width="133px"></v-img>
            </div>
            <div class="os-title mr-sm-3 mr-0"><span>i</span>OS</div>
          </div>
        </div>
        <div class="link" @click="dialogAgreement = true">
          Условия обслуживания и доставка
        </div>
      </div>
    </div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Отправьте свои данные</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form lazy-validation ref="managerForm" v-model="formValid">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.phone"
                    v-mask="'+7-###-###-##-##'"
                    :color="color"
                    label="Телефон"
                    required
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="form.os"
                    :items="[
                      { title: 'Андроид', value: 'ANDROID' },
                      { title: 'iOS', value: 'IOS' }
                    ]"
                    item-text="title"
                    item-value="value"
                    label="Платформа"
                    :color="color"
                    :rules="[rules.required]"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-checkbox
                    v-model="checkbox"
                    disabled
                    :color="color"
                    label="я согласен на обработку персональных данных"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" outlined @click="dialog = false">
            Закрыть
          </v-btn>
          <v-btn :color="color" outlined @click="submit()" :loading="loading">
            Прислать ссылку
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogAgreement" width="700px">
      <v-card>
        <v-card-title>
          <span class="headline">Прием заказов:</span>
        </v-card-title>
        <v-card-text>
          Ежедневно Пн-Пт с 11:00 до 22:00 Приём заказов до 21:30 Сб-Вс с 10:00
          до 22:00 Приём заказов до 21:30
        </v-card-text>
        <v-card-title>
          <span class="headline">Доставка:</span>
        </v-card-title>
        <v-card-text>
          Зона доставки: Академгородок (верхняя и нижняя зоны). Бесплатная
          доставка при заказе 900 рублей <br />
          Зона доставки: Шлюз, Нижняя Ельцовка. Бесплатная доставка при заказе
          800 рублей.<br />
          Зона доставки: п. Кольцово Бесплатная доставка при заказе 1000 рублей.
          При заказе меньше чем минимальная сумма заказа - стоимость доставки
          200 рублей.
          <div class="map-container">
            <div class="map-inner">
              <div class="map-frame">
                <div id="map"></div>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-title>
          <span class="headline">Самовывоз:</span>
        </v-card-title>
        <v-card-text>
          Самовывоз осуществляется по адресу ул. Благовещенская 48/1 подъезд 9.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :color="color" outlined @click="dialogAgreement = false">
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" top right color="success">
      Данные отправлены

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Ok
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { required } from "@/utils/validator";
import L from "leaflet";
export default {
  name: "index",
  data() {
    return {
      dialog: false,
      dialogAgreement: false,
      checkbox: true,
      rules: {
        required: value => required(value) || "Обязательно для заполнения"
      },
      formValid: true,
      loading: false,
      form: {
        phone: "",
        os: "ANDROID"
      },
      snackbar: false,
      color: "#c80101",
      map: null
    };
  },
  methods: {
    submit() {
      this.loading = true;
      if (!this.$refs.managerForm.validate()) {
        this.loading = false;
        return;
      }
      let formData = new FormData();
      formData.append("phone", this.form.phone);
      formData.append("os", this.form.os);
      this.$store
        .dispatch("submitForm", formData)
        .then(() => {
          this.dialog = false;
          this.snackbar = true;
          this.form = {
            phone: "",
            os: "ANDROID"
          };
        })
        .catch(e => {
          console.error(e);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    initMap() {
      this.map = new L.Map("map", {
        center: new L.LatLng(54.876902943601756, 83.07586669921876),
        zoom: 12,
        zoomAnimation: true
      });

      L.tileLayer("http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}").addTo(
        this.map
      );
      this.polygons.forEach(p => {
        let latlngs = [];
        p.coords.forEach(coord => {
          latlngs.push([coord.latitude, coord.longitude]);
        });
        const polygon = L.polygon(latlngs, { color: p.color }).addTo(this.map);
        polygon
          .bindTooltip(p.name, { permanent: true, direction: "center" })
          .openTooltip();
      });
    }
  },
  watch: {
    dialogAgreement(val) {
      if (val) {
        this.$nextTick(() => {
          if (!this.map) {
            setTimeout(() => {
              this.initMap();
            }, 1000);
            this.$forceUpdate();
          }
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~leaflet/dist/leaflet.css";
.landing {
  padding: 130px 125px 130px 150px;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  @media screen and(max-width: 1440px) {
    padding: 100px 100px 100px 100px;
  }
  @media screen and(max-width: 1024px) {
    padding: 50px;
  }
  @media screen and(max-width: 960px) {
    padding: 30px;
  }
  @media screen and(max-width: 768px) {
    padding: 20px;
  }
  @media screen and(max-width: 640px) {
    padding: 15px;
  }
  .white-block {
    position: absolute;
    content: "";
    display: block;
    height: 500px;
    left: 50%;
    right: -12px;
    top: 50%;
    margin-top: -250px;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &__my-card {
    border-radius: 44px;
    overflow: hidden;
    width: 100%;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .my-card-top {
      background: #ffffff;
      padding: 10px 60px 14px;
      text-align: left;
      @media screen and(max-width: 1440px) {
        padding: 10px 50px 14px;
      }
      @media screen and(max-width: 1024px) {
        padding: 10px 40px 14px;
      }
      @media screen and(max-width: 960px) {
        padding: 30px;
      }
      @media screen and(max-width: 768px) {
        padding: 20px;
      }
      .my-card-title {
        font-family: "HelveticaNeueCyr", sans-serif;
        font-size: 100px;
        line-height: 117px;
        color: #000000;
        span {
          color: #c80101;
        }
        @media screen and(max-width: 1440px) {
          font-size: 80px;
          line-height: 1;
        }
        @media screen and(max-width: 1024px) {
          font-size: 60px;
        }
        @media screen and(max-width: 960px) {
          font-size: 50px;
        }
        @media screen and(max-width: 768px) {
          font-size: 40px;
        }
      }
      .my-card-title-sub {
        font-family: "HelveticaNeueCyr", sans-serif;
        font-size: 52px;
        line-height: 61px;
        padding-left: 20px;
        color: #000000;
        @media screen and(max-width: 1440px) {
          font-size: 50px;
        }
        @media screen and(max-width: 1024px) {
          font-size: 45px;
          line-height: 1;
        }
        @media screen and(max-width: 960px) {
          font-size: 40px;
        }
        @media screen and(max-width: 768px) {
          font-size: 30px;
        }
      }
    }
    .my-card-center {
      background: #fff5ec;
      position: relative;
      .white-bg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        left: 50%;
        @media all and(max-width: 1400px) {
          display: none;
        }
      }
      &__text-block {
        padding-top: 77px;
        padding-left: 60px;
        padding-bottom: 64px;
        @media screen and(max-width: 1024px) {
          padding: 25px;
        }
        &--title {
          font-size: 24px;
          line-height: 28px;
          color: #000000;
          margin-bottom: 60px;
          @media screen and(max-width: 1024px) {
            margin-bottom: 20px;
          }
        }
        &--text {
          font-size: 18px;
          line-height: 26px;
          color: #000000;
          mix-blend-mode: normal;
          opacity: 0.6;
          margin-bottom: 40px;
        }
        &--btn {
          border-radius: 13px;
          font-family: "HelveticaNeueCyr", sans-serif;
        }
      }
      &__img-block {
        position: relative;
        padding-right: 15px;
        @media screen and(max-width: 1024px) {
          padding-right: 0;
        }
        &--info {
          text-align: center;
          margin-bottom: 50px;
          margin-left: -10px;
          @media screen and(max-width: 1024px) {
            margin-bottom: 40px;
          }
          @media screen and(max-width: 960px) {
            margin-bottom: 35px;
          }
          @media screen and(max-width: 600px) {
            margin-left: 0;
          }
          &.left-aligned {
            margin-left: -70px;
            @media screen and(max-width: 600px) {
              margin-left: 0;
            }
          }
          .head-text {
            font-size: 28px;
            line-height: 33px;
            color: #000000;
            margin-bottom: 4px;
            @media screen and(max-width: 480px) {
              font-size: 25px;
            }
          }
          .bot-text {
            font-size: 18px;
            line-height: 21px;
            color: #000000;
            mix-blend-mode: normal;
            opacity: 0.3;
            @media screen and(max-width: 480px) {
              font-size: 16px;
            }
          }
        }
      }
    }
    .my-card-bot {
      background: #ffffff;
      padding: 50px 60px 50px;
      position: relative;
      @media screen and(max-width: 960px) {
        padding: 40px 40px 50px 40px;
      }
      @media screen and(max-width: 768px) {
        padding: 30px 30px 50px 30px;
      }
      &__wrap {
        .inner {
          width: 50%;
          padding: 0 20px;
        }
        @media screen and(max-width: 765px) {
          flex-direction: column;
          align-items: center;
        }
      }
      .link {
        position: absolute;
        right: 30px;
        bottom: 20px;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        text-decoration-line: underline;
        color: #2a88cc;
        cursor: pointer;
      }
    }
  }
  .os-title {
    font-size: 72px;
    line-height: 84px;
    color: #000;
    @media screen and(max-width: 1024px) {
      font-size: 62px;
    }
    @media screen and(max-width: 960px) {
      font-size: 50px;
    }
    span {
      color: #c80101;
    }
  }
}
.map-container {
  margin: 30px 0;
  min-height: 500px;
  position: relative;
  .map-inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.map-frame {
  border: 2px solid black;
  height: 100%;
}

#map {
  height: 100%;
}
</style>
