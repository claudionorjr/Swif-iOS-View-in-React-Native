//
//  CounterManager.m
//  ViewCounterApp
//
//  Created by C84396A on 17/11/20.
//

#import "React/RCTViewManager.h"
@interface RCT_EXTERN_MODULE(CounterManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(count, NSNumber)
@end
