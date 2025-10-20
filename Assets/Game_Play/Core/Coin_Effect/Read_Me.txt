******************************************************************************************
**************************		Coin Effect		**************************
******************************************************************************************

How to Use:
- Add script "CoinEffect" to Target Object

Control Coin Effect:
-         if (m_CoinEffect_X3_Coin != null) {
            m_CoinEffect_X3_Coin.AddCoins( [startCoin], [finalCoin], 
                () => {
                    // anim_Done
                });
        }