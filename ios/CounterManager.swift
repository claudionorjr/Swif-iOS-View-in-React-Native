//
//  CounterManager.swift
//  ViewCounterApp
//
//  Created by C84396A on 17/11/20.
//

import Foundation

@objc(CounterManager)
class CounterManager : RCTViewManager {
  override func view() -> UIView! {
    return Counter()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
