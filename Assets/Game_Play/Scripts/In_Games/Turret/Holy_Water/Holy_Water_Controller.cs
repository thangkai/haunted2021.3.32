
public class Holy_Water_Controller : Base_Turret
{
    public override bool Check_Can_Click()
    {
        if (m_Type_Character == Type_Character.Priest)
        {
            return m_Is_Can_Click;
        }
        return base.Check_Can_Click();
    }
}
