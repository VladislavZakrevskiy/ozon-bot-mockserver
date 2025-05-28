import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const names = [
  'Коврик в самокат',
  'Съемники обшивок',
  'Дверные подлокотники',
  'Багажный карман',
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('v2/product/info')
  getImages() {
    return {
      result: {
        id: 137208233,
        name: 'Комплект защитных плёнок для X3 NFC. Темный хлопок',
        offer_id: '143210586',
        is_archived: false,
        is_autoarchived: false,
        barcode: '',
        barcodes: ['2335900005', '7533900005'],
        buybox_price: '',
        category_id: 17038062,
        type_id: 0,
        created_at: '2021-10-21T15:48:03.529178Z',
        images: [
          'https://cdn1.ozone.ru/s3/multimedia-5/6088931525.jpg',
          'https://cdn1.ozone.ru/s3/multimedia-p/6088915813.jpg',
        ],
        has_discounted_item: true,
        is_discounted: true,
        discounted_stocks: {
          coming: 0,
          present: 0,
          reserved: 0,
        },
        currency_code: 'RUB',
        description_category_id: 0,
        marketing_price: '',
        min_price: '',
        old_price: '',
        price: '590.0000',
        sources: [
          {
            is_enabled: true,
            sku: 522759607,
            source: 'fbo',
          },
          {
            is_enabled: true,
            sku: 522759608,
            source: 'fbs',
          },
        ],
        stocks: {
          coming: 0,
          present: 0,
          reserved: 0,
        },
        errors: [],
        updated_at: '2023-02-09T06:46:44.152Z',
        vat: '0.0',
        visible: false,
        visibility_details: {
          has_price: true,
          has_stock: false,
          active_product: false,
        },
        price_indexes: {
          external_index_data: {
            minimal_price: 'string',
            minimal_price_currency: 'string',
            price_index_value: 0,
          },
          ozon_index_data: {
            minimal_price: 'string',
            minimal_price_currency: 'string',
            price_index_value: 0,
          },
          price_index: 'WITHOUT_INDEX',
          self_marketplaces_index_data: {
            minimal_price: 'string',
            minimal_price_currency: 'string',
            price_index_value: 0,
          },
        },
        commissions: [
          {
            delivery_amount: 0,
            percent: 0,
            return_amount: 0,
            sale_schema: 'string',
            value: 0,
          },
        ],
        volume_weight: 0.1,
        is_prepayment: false,
        is_prepayment_allowed: true,
        images360: [],
        is_kgt: false,
        color_image: '',
        primary_image: 'https://cdn1.ozone.ru/s3/multimedia-p/6088931545.jpg',
        status: {
          state: 'imported',
          state_failed: 'imported',
          moderate_status: '',
          decline_reasons: [],
          validation_state: 'pending',
          state_name: 'Не продается',
          state_description: 'Не создан',
          is_failed: true,
          is_created: false,
          state_tooltip: '',
          item_errors: [
            {
              code: 'error_attribute_values_empty',
              field: 'attribute',
              attribute_id: 9048,
              state: 'imported',
              level: 'error',
              description:
                'Не заполнен обязательный атрибут. Иногда мы обновляем обязательные атрибуты или добавляем новые. Отредактируйте товар или загрузите новый XLS-шаблон с актуальными атрибутами. ',
              optional_description_elements: {},
              attribute_name: 'Название модели',
            },
            {
              code: 'error_attribute_values_empty',
              field: 'attribute',
              attribute_id: 5076,
              state: 'imported',
              level: 'error',
              description:
                'Не заполнен обязательный атрибут. Иногда мы обновляем обязательные атрибуты или добавляем новые. Отредактируйте товар или загрузите новый XLS-шаблон с актуальными атрибутами. ',
              optional_description_elements: {},
              attribute_name: 'Рекомендовано для',
            },
            {
              code: 'error_attribute_values_empty',
              field: 'attribute',
              attribute_id: 8229,
              state: 'imported',
              level: 'error',
              description:
                'Не заполнен обязательный атрибут. Иногда мы обновляем обязательные атрибуты или добавляем новые. Отредактируйте товар или загрузите новый XLS-шаблон с актуальными атрибутами. ',
              optional_description_elements: {},
              attribute_name: 'Тип',
            },
            {
              code: 'error_attribute_values_empty',
              field: 'attribute',
              attribute_id: 85,
              state: 'imported',
              level: 'error',
              description:
                'Не заполнен обязательный атрибут. Иногда мы обновляем обязательные атрибуты или добавляем новые. Отредактируйте товар или загрузите новый XLS-шаблон с актуальными атрибутами. ',
              optional_description_elements: {},
              attribute_name: 'Бренд',
            },
          ],
          state_updated_at: '2021-10-21T15:48:03.927309Z',
        },
      },
    };
  }

  @Post('/v3/posting/fbs/unfulfilled/list')
  getProducts() {
    return {
      result: {
        postings: [
          {
            posting_number: '23713478-0018-3',
            order_id: Math.random(),
            order_number: '33713378-0051',
            status: 'awaiting_packaging',
            delivery_method: {
              id: 15110442724000,
              name: 'Ozon Логистика курьеру, Москва',
              warehouse_id: 15110442724000,
              warehouse: 'Склад на Ленина',
              tpl_provider_id: 24,
              tpl_provider: 'Ozon Логистика',
            },
            tracking_number: '',
            tpl_integration_type: 'ozon',
            in_process_at: '2021-08-25T10:48:38Z',
            shipment_date: '2021-08-26T10:00:00Z',
            delivering_date: null,
            cancellation: {
              cancel_reason_id: 0,
              cancel_reason: '',
              cancellation_type: '',
              cancelled_after_ship: false,
              affect_cancellation_rating: false,
              cancellation_initiator: '',
            },
            customer: null,
            products: [
              {
                price: `${getRandomNumber(1, 10000)}`,
                currency_code: 'RUB',
                offer_id: `УТ-${getRandomNumber(1, 100000)}`,
                name: `${names[getRandomNumber(0, 3)]} v${getRandomNumber(1, 100)}.0`,
                sku: getRandomNumber(1, 100_000_000),
                quantity: getRandomNumber(1, 10),
                products_requiring_jw_uin: '0',
                mandatory_mark: [],
              },
            ],
            addressee: null,
            barcodes: {
              upper_barcode: '%101%806044518',
              lower_barcode: '23024930500000',
            },
            analytics_data: {
              region: 'Санкт-Петербург',
              city: 'Санкт-Петербург',
              delivery_type: 'PVZ',
              is_premium: false,
              payment_type_group_name: 'Карты оплаты',
              warehouse_id: 15110442724000,
              warehouse: 'Склад на Ленина',
              tpl_provider_id: 24,
              tpl_provider: 'Ozon Логистика',
              delivery_date_begin: '2022-08-28T14:00:00Z',
              delivery_date_end: '2022-08-28T18:00:00Z',
              is_legal: false,
            },
            financial_data: {
              products: [
                {
                  commission_amount: 0,
                  commission_percent: 0,
                  payout: 0,
                  product_id: getRandomNumber(1, 10000),
                  old_price: getRandomNumber(1, 10000),
                  price: getRandomNumber(1, 10000),
                  total_discount_value: 629,
                  total_discount_percent: 33.32,
                  actions: ['Системная виртуальная скидка селлера'],
                  picking: null,
                  quantity: getRandomNumber(1, 10000),
                  client_price: '',
                  item_services: {
                    marketplace_service_item_fulfillment: 0,
                    marketplace_service_item_pickup: 0,
                    marketplace_service_item_dropoff_pvz: 0,
                    marketplace_service_item_dropoff_sc: 0,
                    marketplace_service_item_dropoff_ff: 0,
                    marketplace_service_item_direct_flow_trans: 0,
                    marketplace_service_item_return_flow_trans: 0,
                    marketplace_service_item_deliv_to_customer: 0,
                    marketplace_service_item_return_not_deliv_to_customer: 0,
                    marketplace_service_item_return_part_goods_customer: 0,
                    marketplace_service_item_return_after_deliv_to_customer: 0,
                  },
                },
              ],
              posting_services: {
                marketplace_service_item_fulfillment: 0,
                marketplace_service_item_pickup: 0,
                marketplace_service_item_dropoff_pvz: 0,
                marketplace_service_item_dropoff_sc: 0,
                marketplace_service_item_dropoff_ff: 0,
                marketplace_service_item_direct_flow_trans: 0,
                marketplace_service_item_return_flow_trans: 0,
                marketplace_service_item_deliv_to_customer: 0,
                marketplace_service_item_return_not_deliv_to_customer: 0,
                marketplace_service_item_return_part_goods_customer: 0,
                marketplace_service_item_return_after_deliv_to_customer: 0,
              },
            },
            is_express: false,
            requirements: {
              products_requiring_gtd: [],
              products_requiring_country: [],
              products_requiring_jwn: [],
            },
          },
        ],
        count: 55,
      },
    };
  }

  @Post('v3/returns/company/fbs')
  getReturns() {
    return {
      last_id: getRandomNumber(1, 10000),
      returns: [
        {
          clearing_id: 0,
          commission: 0,
          commission_percent: 0,
          exemplar_id: 0,
          id: getRandomNumber(1, 10000),
          is_moving: true,
          is_opened: true,
          last_free_waiting_day: 'string',
          place_id: 0,
          moving_to_place_name: 'string',
          picking_amount: 0,
          postng_number: 'string',
          picking_tag: 'string',
          price: getRandomNumber(1, 10000),
          price_without_commission: 0,
          product_id: getRandomNumber(1, 10000),
          product_name: `${names[getRandomNumber(0, 3)]} v${getRandomNumber(1, 100)}.0`,
          quantity: getRandomNumber(1, 10000),
          return_barcode: 'string',
          return_clearing_id: 0,
          return_date: new Date().toISOString(),
          return_reason_name: 'string',
          waiting_for_seller_date_time: 'string',
          returned_to_seller_date_time: 'string',
          waiting_for_seller_days: 0,
          returns_keeping_cost: 0,
          sku: getRandomNumber(1, 10000),
          status: 'string',
        },
      ],
    };
  }
}
