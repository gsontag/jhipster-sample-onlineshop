import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'category',
                loadChildren: './category/category.module#OnlineShopCategoryModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#OnlineShopProductModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#OnlineShopCustomerModule'
            },
            {
                path: 'address',
                loadChildren: './address/address.module#OnlineShopAddressModule'
            },
            {
                path: 'wish-list',
                loadChildren: './wish-list/wish-list.module#OnlineShopWishListModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnlineShopEntityModule {}
