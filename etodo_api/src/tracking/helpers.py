from django.conf import settings
from django.core.mail import EmailMessage


def through_email(
    subject,
    body,
    recipient_list: list[str]
) -> None:
    """Send Email"""

    mail = EmailMessage(
        subject=subject,
        body=body,
        from_email=settings.EMAIL_HOST_USER,
        to=recipient_list
    )
    mail.content_subtype = "html"
    mail.send()
