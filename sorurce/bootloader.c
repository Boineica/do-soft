#include <efi.h>
#include <efilib.h>

EFI_FILE* LoadFile(EFI_FILE* Directory, CHAR16* Path, EFI_HANDLE ImageHandle, EFI_SYSTEM_TABLE* SystemTable){
	EFI_FILE* LoadedFile;

	EFI_LOADED_IMAGE_PROTOCOL* LoadedImage;
	
}

EFI_STATUS efi_main (EFI_HANDLE ImageHandle, EFI_SYSTEM_TABLE *SystemTable){
	InitializeLib(ImageHandle, SystemTable);
	Print(L "Booting up.\n\r");
	Print(L "Cannot boot to kernel yet.\n\r")
	Print(L "We inprove according to feedback.\n\r")
	Print(L "Source can be contributed by everyone. Make sure you impress the others 😜\n\r");

	return EFI_SUCCESS;
    // Do-Soft kernel cannot be used yet
}