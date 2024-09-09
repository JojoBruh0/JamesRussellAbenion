Imports System.Windows.Forms.VisualStyles.VisualStyleElement.ToolBar

Public Class Form1
    Dim q As Boolean
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load

    End Sub
    Private Sub Buttons(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button5.Click, Button6.Click, Button7.Click, Button8.Click, Button9.Click, Button10.Click, Button11.Click, Button12.Click, Button13.Click
        If q = False Then
            CType(sender, Button).Text = "X"
            q = True
        Else
            CType(sender, Button).Text = "O"
            q = False
        End If
    End Sub
End Class
