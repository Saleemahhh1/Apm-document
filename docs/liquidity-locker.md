# 🔒 Liquidity Locker – APM Protocol

The Liquidity Locker is designed to guarantee long-term trust and transparency within the Agro Prediction Market (APM) ecosystem. It ensures that the liquidity added to the decentralized exchange (DEX) is locked for a specified duration, preventing rugs or sudden withdrawals from liquidity pools.

This mechanism protects the community, stabilizes the token price, and provides credibility to investors and users during early development and TGE phases.

---

## ## 🔍 Why Liquidity Locking?
Liquidity locking prevents:
- Sudden removal of liquidity (rug pulls)
- Manipulation of token price  
- Investor uncertainty  
- Unfair trading advantages

It guarantees:
- Transparency  
- Long-term protocol commitment  
- Safer token launch

---

## ## 🧩 APM Liquidity Lock Features
- Time-locked LP tokens (cannot withdraw until unlock date)
- Owner cannot bypass lock  
- Publicly verifiable lock timestamp  
- Extendable lock period  
- LP tokens claimable only after unlock time elapses  
- Fully on-chain verification  
- Non-custodial system

---

## ## 🔐 How It Works
1. Project deploys token  
2. Adds liquidity on PancakeSwap (BNB Chain)  
3. LP tokens are sent to the Liquidity Locker Contract  
4. Locker sets the unlock time (e.g., 6 months, 1 year, 18 months)  
5. LP tokens remain frozen until unlock timestamp  
6. When time is reached, project owner can claim the LP tokens back

---

## ## ⏳ Recommended Lock Duration
| Duration | Purpose |
|---------|----------|
| **6 Months** | Normal startup credibility |
| **1 Year** | Strong trust for investors |
| **18 Months+** | Institutional-grade credibility |

APM will be locking liquidity for:  
### 🔒 **Minimum: 12 months (1 Year Lock)**

---

## ## 📝 Liquidity Locker Contract (Simplified)
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LiquidityLocker {
    address public owner;
    address public lpToken;
    uint256 public unlockTime;

    constructor(address _lpToken, uint256 _unlockTime) {
        owner = msg.sender;
        lpToken = _lpToken;
        unlockTime = _unlockTime;
    }

    function lock(uint256 amount) external {
        require(msg.sender == owner, "Not owner");
        IERC20(lpToken).transferFrom(msg.sender, address(this), amount);
    }

    function unlock() external {
        require(msg.sender == owner, "Not owner");
        require(block.timestamp >= unlockTime, "Not unlocked yet");

        uint256 balance = IERC20(lpToken).balanceOf(address(this));
        IERC20(lpToken).transfer(owner, balance);
    }
}
